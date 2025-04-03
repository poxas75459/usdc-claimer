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
    "DFTMXBF1rv3eirCPDpxKjTmPjUPMTLGmzanPGvgnDMGELL5d6PWims5VVLYbaG84KJXg35HamoBTzUz5oYkr6u7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZZBfhPfBGiVi2ED1NEFXAhwLr2w3mppxcyMG3jLX89ZXDJBYf5st6hsyXL9RZeQtc6TzJqJf3EoSdR2nXXoLQFC",
  "key1": "24zrxgw8dxRo9Ygi4H9PTWcCUu5j5imGRnHqHXCR6Tg7wtnLJpg69xp7PBauKkbrYSLmgHh7nw52hLuDS31uvShp",
  "key2": "58qohEuqo8viVZEDGwtFfomyL97HBfLMMy3CdU99mJ7bLCjwttZaQx8jnKjwizXVfPYkKri3BRvGrtGr7uZsUk7q",
  "key3": "5tKAaRGmatqR6uk5BpPWXUFqP9EZPCytVScBh2vyo9FeQqL9pf6aNExEhGgEn2vWVEywDZt1zdp3WzGhZLyvTrUP",
  "key4": "276eGEnvSLpM8mgN6aNY2a7H2w8JFAdLCN71W2o44EC6D7bHKWk4wiHYqqKfLi6so3RFXmteZ8T25VtdFAWeBCHf",
  "key5": "4sNqdjhikPuxFi6Cc6NMfuR9p75dMMjctd7QF6V5aWudUMnREyWcvtzQkW3NLCxusy7zgVGet29Kt5iNrWARyevX",
  "key6": "6AXg5iNbEnRezptY8P1RV4VNvpxW9CGaRSeCTxbtzej2mMrmY8BeSAfsL2yi7i5vj7vr2pndLDg9iwUzAZ3LNTp",
  "key7": "2R6DcQCZEDKVkqxi4Ru9BYfFi5T7mVvQnMipYwS4VVzJECDtQ6Hrgks2W3fUknkUenidESXDLFmJgqutWfJZqRhx",
  "key8": "zudYVkMfahkqgKU2mJHodm9LJ3LHpfRYrhZD5dJoxZrXKrc8tnwvpXNP4bSWDozd9R6k8VQc32ZqrDDAPmLEqQi",
  "key9": "4ouigryNdKQThyQJtdoxVFg3XtPEKBhdVgJ6b8zrCcayytWzWppm8uCTuU5aQYzV3P1Hx8kJb7xR33W3sC6qgj7b",
  "key10": "v1GULpTVQaCiS2xz8VXM6p5L9J4gwWEkCxgx2AYZX8GDMP6FmNnn4CU1wyknBfFtFtLSMhYP89eQ5utkXWdD5Ra",
  "key11": "45oTgPTK6ri9EKmaqN7oQWPLJpNHgKoQVhiNubinduTNyEqPMTshqQ3unxVfa86CC1qeiGzg2MGZyXiw38938DRy",
  "key12": "5X93PKVrQuNJu2n6x9ZHehmd45WVGFnbET8KTNAuq9HeJUEAhqGvfoAEvdZwbTMxYbZvobBPRHDge5A5o6koq3QN",
  "key13": "4Gkq3gg9UX122hWLShL4BP48i2h6LFK4qXjxRWNXSVcjaa8dJkJeuNZb8LUA2CksG8ed7psPXdRxBLrgTEFQow5P",
  "key14": "4ri6e7mHXWqU8FkUhH64dPhvHrQ7QsktwzfY8PrV5vmdkLLwT9uymN6D5armkfGDHMJbFpLbgVPGuNJE7B9pPqzL",
  "key15": "2p9kQh3fsNR9vvymzVb2Ln6skPpnbv3sNzMqTuNkPaWuniw8WtkyEU8yWPLRpBz6ne5EymaaLe2sPnbPDS6RH9xQ",
  "key16": "4GWP5fMwXEXRcjtcsexQ11c91mqmstJUsJus9SGeVUyc98vuCogCFfrScuEj49vthRwzg8AHAciTbA1YK7tJCRXh",
  "key17": "kWKEBHc6mgG5Efx2NAEmbhxwj2d2MrjvxV6kp4hUu33fmtQjwFWh8UgPUU7tf1bqNXeREpNGbSxUe4LQBoEdGQS",
  "key18": "3APvce5SpapqPfHkb7rMdLvfpqMiPEpxjpcEpJh862Eub4GjgiMAtvp114hSr9gnGzbvcN5bByV7etucPeHdCe8G",
  "key19": "5Np7y8qyG6itcURwHVDUiLPd3xZAHK7BS8BE2M5zAqszBLFxHYe9V8jXaesJ3nav5RtA5a5HCvLNsMUND7UVM1Cs",
  "key20": "2zEMtdSSDtrry9GxmCLcuTYV6tEeKbX2oDQe9YVNmu7wnxUZ9UsbZ9skHWqq8DAMFTAPSXZGQM2qcrjE5sr2mk6H",
  "key21": "3Li5BsudRkdctrfWGbopQaytRMwDs5VH9WvKtWcCx6r74jUmBzGgmxtMt8EuWRamJCQ1LYazC4W4MdRCnH7FpWme",
  "key22": "3fF4zkrm2bi36R6QFVxPfPhBzssv7pwNXVaQmmhZA6pHStYKSfhT6taYKZMcEseyh72WpDdoeT7LUvQB2yqHR7rq",
  "key23": "5oGbYsxDWG5WEHmYnHXmDb3UNYraPWdDL1P18DpiRLTFGFoJGWAbG4bGHAsS4WoVsEKuNGC2EpicEvNBHscytVpZ",
  "key24": "5P2M5KEqbVSwxxcCnnyXm3UwnMYfxW7Jr1SKxbQcfup1ZVK1zbNGHnGvbPRqREYg7dDGHAUCenskrknA5MNWrPvu",
  "key25": "3mMdmhgzPc9dRquaT3rtwvndG7x4pmU2MqSvnz7FVivyuD67rwSDJZDWardQDu2ftZEggBUGPvjWwtiGXaprybGs",
  "key26": "n9rEcVyrZetbzCAWyLsR8gtZXtnoY9B62VNWhr9UmhLk6y57jLrhoMgKYTTCTBH8GzdukYDtrFDfzwmUk79Mutx",
  "key27": "YfM86AbykSi4qUk2PKw4QsadWiuEcRYTXC5WSV5hn3yWhyaXPG3y6WFCJNF4bCvv1V2DcX9Cq2MkpwUEDUzQXUn",
  "key28": "4yMdMRmKNaBFTvnryyj2LDWUPeSjSGoPRf5VezFT55rdpXXh26KpeVfzNcdM3fgFdH7EjeM58uxJJinnWSdtxU3c",
  "key29": "4sAg2rUa12RGwfTu4iAmC4U72wYFa2Nbv4xmNdohzy1bxtnjjHJ7dsLUVzFqqaQxjAaRym1ZLTdi1qS7vYvCBA2M",
  "key30": "5kTcY6FPXZNswsDHCHpcfFAQ7vXUq2yuNKQpj1bfaRHsdmvdKVyAV4aqezePgbWfyG2YSHnRntDFQMjqDnx2jFeA",
  "key31": "3v1y6sisTLsavhvBTchF5fG1RoCAmkhhNZvcdiKd9pm7TwuJGrcif4dDVtbwexePB9s4gHLWwG2KivRzMufidqP6",
  "key32": "3afiVahDmuB3QNUtM5UN72WZRoEt9T8zn1vhXx3KdF2QE4VUThusp7XaWDYYws5cYk1Fkravg4wKKq3qoSQdgiv6",
  "key33": "3jSJXc4pxPgY7nGnLqMWPpCiAt3HbYNoHhwzcgwuBnJg4sdNGq7WozTxJ1NYATw1u9dY3hFFnyReatNEh2dshLHh",
  "key34": "7Bpp9f2JnwSxHHxSKpAysGXgLRVaSwBkSrfWemW7NQhbEUhHNcjneqpZsxCaE5upKMVW7vrCPXGfkoRQ8MtNsDF",
  "key35": "3QzaL5xcK5h6Pbbra1ieTiWJYMvSumR4xkMtZyGuHNZxASdkgwUJ5Qqvn3nQpoqJW7yQMDGA3WCqLjCJgxaXVujV",
  "key36": "4keFfJe5s1gMeSGxHeY9AvNHFMDGYFjypMH1yoiBHnuH5QaTUJVWJiYWyMR9VfA3pnor6gczNs5bkUcvoLHpz2zQ",
  "key37": "5CEJk8axdAeFKidSYX99jqrAtatDYSPsS7ZvLPypDKP86LWK187Q3dAUSsxT2pnnYPXEcLNKi6ArtPHskamsRNcM",
  "key38": "w74xMuRk2ydKBZjyayniMy8vGdFc5N92GvyCGMqDd9ijAt5gVmcHbbhnxxZZM51XC2A1p1yDVASL1C2oZoQH2BV"
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
