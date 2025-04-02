/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2dBg6zpVerHA7rKbvusi698kRK6FrTZiAFqojk5vjyhuzhrMUit69UJBp2hZHkU6Xo5wTDi6ywEY2q4FSzayENQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NU88QeWRhorjS9Jqt8AEfKhpjkvZmRAJG4U8rySef2MJQCezCDjAR3J8iWciRXQ82MCANS91Dxazg4KJVMVw89L",
  "key1": "2Qj6GiFxUXQ4hr4NRsJE8fU9TFHNbQyNDpdEAvE278kfnQ9T2qzWCDMU2HEJckNnHrs3dcfYZNY7zqUWdaw3swTb",
  "key2": "5pjuM1sRjygUHbWLkhHkhmvEziP6b9T1cu1gvZo8wwuMgapG8HEd35NEDUtxYy8H86DUyWfVF6qQJdJPCSBWUYHK",
  "key3": "ip1zNLBXLD8NZSEhiLuqVVcuJHAY1vaHzbRnjAW1xv83R1smxMycBsVHguhpgyENjB5aWNZSxmiY3MiitQQ1SaN",
  "key4": "62Lit1kgfKtXx9f23Bu1JtcgWP1eSSRo6iC8LqqYMqrFhf6donEvwB6bFG73XJzGaskLhkULfZmgEGxf2JqxQ2qa",
  "key5": "64wL3ZHSgXWzh8EUoNtbW4KCjcLgz1ymYqnsZpjqz5DLPZyokjUekkPdtXq6FpGSyfkod2Q3nsVghzpPP8QZEFud",
  "key6": "41U9LaBaqtkTuzMhV65CeoeB3fQ14znWAhceyt3Gndey3YXWQgXa5UeRgvxbWSxJrdndTbf4gKpo6tPyxbhcn4Kw",
  "key7": "2kHXbLBa5hG5fLj6KkhVHGW1NcRwgLbeGZg5qBFW6sMqSTobsEaaJ3tdm9kQhFES3mmv5BtBLWito5zVoXePX6jP",
  "key8": "qpwrmfY8ZxoUpkteqS76t9uqErX3jBR97Mu8SbUYoE2yY4PtkRfFD5pCSma8Nvumb1WNeBgsxJofisHYyBcyN9J",
  "key9": "5MUqRqh2do2Y7f9vo1WcXedoDAPq5biLXDXicQoKiDFJ24m57aM43k5vMDcHPoDeiE7pTPseLTwV4udEVxx4kpdu",
  "key10": "3jbW1kaQg8rH4hcBkGyLH26zWhpy3VmH9CmLhZ4HXmdk6QmYN8orAF5rxcwaHov5cci9niTYGrdYKNFZJPwu4gNv",
  "key11": "5ZYDgkPTescDFCfFKYrCkzN4N4oZnc3u29unH2Yb9MajkqnE33Z91zS7iLdYB3vAr1RweE2EdrCmXFDTzDdbaSBc",
  "key12": "6dojD9zx1URa6u76WMxN16hh1xF7TGqkwiQeEBGSwJM12qRxJkpKj6ktaeMSUMwnbNM9q4MefQFmPT1tuKKrh7h",
  "key13": "kA9fixERcdws6PxgHUxvDgFRBEJf9MY7T6Lpy57DPbLmzNKpzMErFs2TMKGRYJgnbQBRGEWx59a2akyacc89Vee",
  "key14": "2Cav8erqUnos3aPjaLvaLaeHeVrcq2VWx5FzzXEoCUp4YsnbGNPp3ZTiSVjjvcuVK9HHVGGbF6okR9GJ8WHuWZyP",
  "key15": "5HcPt5jLxaGGXu1wv8tFzyTjsRpSX6rbyJovB1aiitYsE1PPwQQX6sBVL8jxdeMdjpxeGczCHsrRNyh1YwBxcQwq",
  "key16": "3BNQQqiGFtnTPbiftuzHJAbxD7vWPwRaqf1hpbRqi5AVgdYoNKkXgZP9xAQi6bNPgyPdCrDrxN1epiPJj6rZ3Dnz",
  "key17": "5U2dzjcxUQQ53d5uxieVgJj6E7uLJKxFAeyE6HbHvbDG78D3QtEF2EsDX5cQEmHtEcFTBPuTNb9MxozazpUwkNz2",
  "key18": "1pBPDTsBkziXaC8NXh37y6b83CFNKiJwRjaHFDmjFyF7tqxG8oyg6qsyjbMnv5RNdmvJrRKB8ygUbknDMp57fSY",
  "key19": "48qieGCWpivuecqCYUBAb8A1aKdDHaXpHamsc6tk72aBKZrEvbrAyjvnRTiSR9iuAPTFYrrvHw16iaXdMgz1Ki8w",
  "key20": "3phFRMD1nhKTMroGwhtRFpDwwxgS34FLBSxcMYEMndKwXEYTEoo18HxgGYXxtLPHZ3uHAffBM6ELVcSnkodeD5Mw",
  "key21": "41ZQbhhdbRenhdxsos5LCb7oNLWTYnSYPBk6BiMK8WKLgqvQmGv88keBS9Yfunub94GKgypVDVCNp3HoMf3jppRS",
  "key22": "3sy4LwKjYeRZogwDfoq7Cme3fE88U4z8z6wv3HvmYRFR8mHoJVD757kE1b1ZBFSUupY1oiVXeJHWx4aJh6Ygy5P7",
  "key23": "5iw7BwcySQFMzFXi2UKwdjw328wfrYVuHC9F8nyiHXxcfsLeJqBSBdoh7DVq1d635wusDtU4Soprw64bikoMwk2J",
  "key24": "4ijWZeq3LyT5S41WgtzStHVsayDqwfxhbKfVVzoiYnhmzdpRjUBtX1VdavSWqP5iEubm2BRutZFhNjH1VHzy1RUN",
  "key25": "4K5joLDEgNWXegvohsgPtqmQt7bLyTgNvehJ2zgfN7vpM3D3knkq4VAbepQnAVSPvSbvut3jLcTMs4pNxpoBcvic",
  "key26": "5NtCqkh6eqqnoNpPK4BxY8gLkr9jZZCVup9EsEux9uHEUiL5eGCvbZCRXpvAkVX8Aqxi4US9KSjPQGcKvLj9gNhD",
  "key27": "4mspTS1TCnWgnv7Fk6EMgeUG4bExWAKsidTHEF9uFNiojLQkeDAjVRMSz4xygerH7s2NFAkDLU9VBfQmPyFiq81Y",
  "key28": "4PkkVnT5R4vdW5hHw6rqAqhVTGQeVPxuSrTRD5tf6AmMB3LxGb2XgwNsKzXeTF3nM2qRGtJ81f1YqiyzbgJ2jc34",
  "key29": "5CqKmcr5VyN5Gz95k2puMSsjaTkLRFtVXLAhnACUbb6gtJTYpMVvfArKrPep7RhjuLrPMJBNyDDku7yY5r8fVS6c",
  "key30": "2xQZfgoUX4HgT7ze1dKWWeBZrCvHvLY8jn4Na8nknxLS52Q3aQqz9knBpdnTcpFs4rpaoybjqFq2D1TnzxZBNrEi",
  "key31": "4fAd5B4sEK8rh4iD1GBWUYxbzcBfFz6TXYVwF6uJu7RjPALjieonbazPRFotv4tsuJkuAsukkia6Xp8vBgeAFaRU",
  "key32": "2nYjNDQ38GXJnqmMm122DdVoxzZcffK2wVjeN42LuS6LurbLueUawkLAVb5TS8owhsdkB3VD2K2PsHRodCW3Mtoi",
  "key33": "5jDUVWgR5SMWG8ydZZgX4LfYx9XcJeHtZ8uryvoarJ6iipFC6aqqttKd22KMqaxWbfiD8BsZJ5fBmJwuZSdZmgFd",
  "key34": "2t2VgHuECqt1hAo5wGo12Aa251PWaqZx5f3U6XRvckbCJK5Yb1SX6ksTqWzqNX6zkUc4STdRMZ3YYjuwuE9wv1QX",
  "key35": "xDTEnKvR3GRdzmN4iY2aPrMqLTvzqtMq92FzaDEqVMCB91iHRAqfyVBpFJfzprFA79YTwxqP7CU93hYJz5cBnDT",
  "key36": "5hmT6VFhBUxS9o9TfUCaC6foJySdXepSqtt4dgnjzrHerEb7WWpDkE59k3r1zND6tM4HETD4NJTQFQJFeCo5Vtkr",
  "key37": "4NaL59WkLsQ1U3vPoq1A4f8GRJTDufN12TdPLojRZBZRJxR28FsNRe75NMYtBQoq9g5No1moozqRJ8J1FA2c4A3d",
  "key38": "5owjxJ5qyx2gzW1WA9pzPkDVtm9kZKThuXSCUCyCToZMFWWw4HE479ZZWbKuCrPrqgk43mMNnm3xQynbuwn4L2ji",
  "key39": "NVkDuuydbh43RCHABmbUQQVMQEanYfEZQChvc7SDHT9wjjs92Q9X2U1xsCHqjvCtnHgT84ZAxFWvHQxASNYz5BT",
  "key40": "3jzTgAsjjgdKwTvmUcws6yYCnfadqFHbQH4fJuHPMELxnthv231RqexnPjhxUSVHJpVgzgtztAhTQu8bC1Ft4E8Z",
  "key41": "3VcLz6feJF24NN5dCmz9v1ysMopmm2ks75s5R3AxmXSjctFWouTB6NjmD6qsi5SKKiT3nYXwaYuXQidrfwdU4Pod",
  "key42": "29pcmEuhKhwzQ2yYgeyGLEjcfsCGG92z5q1a47gpmsXELtdYsoB2QxvAiNxJDu4Ntdu57gD857t9J3uq4Z2AdLes",
  "key43": "4pvv5sVhzJNQnYAcDBFsNY6Uo16aDgQNGk4EP2bzWfxWKC3PqCZ6R61DMrpmxLcK6i2TLRRuvruEM4q1ky1bYdY8",
  "key44": "33Mcs3nv9BcEqoMfdFj4ey8F9oKu6wJBYQ9uehpcdVpWqepcqwaw31534fo2NPYwpzGYsT93S1eiuTfQkESkM9HH",
  "key45": "2qBTMHCnQ1sSHCeie77XWixmFuQtx57aciy2sADH4d6LwLHGWQxdR6WU1iX2F7pJhxnU2iJU675q3ucwq4RnCpdp",
  "key46": "121MCxAmE6jywUdwWX5MCqKM9XrKwVH89tjmse2UpUtkK5SCgufYaCzhtxyjqqtUyARQF1gA8LJ9nzsvZ2vTrs1U",
  "key47": "3WY92VNXYmJ2aDngNoctuCvsuyemKSaZqX8UvU5QyaGj9NjET2QFAa41v13dgBAod7JQTJ5QAYXr2SpAMiQPMeVH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
