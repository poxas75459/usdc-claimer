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
    "4nTHNwf8QqkoFRC6c1bSa4wYxn6vPoWtbSy19tn4UyS5t4SCwXVbs5jpivvKWxu7nPT4EZF1omTX81B8WUbdhtSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugjTqpPXxGbFf953ZsduvkWpbQZKVnKxvcqdSafyybMiHnvJ4AUNXNigmTxDpoLi1YRynjkLtgi8sNhiQMudgvk",
  "key1": "2aETMQSX4DXExKpDarab6ZwQ4MxXQ68xrEAAgBiev31o6onbDjMcsyWCgwrrdmk9Fsxr8vGXFjP7Ut7vCHhTwq3f",
  "key2": "r6rAhLQnLG5h2vz8V9dDB3Vrwf13WPBkatiymMahh8ZU1evRxGpMpiyRC6Zsme4qhvX1HZ58cwtxfmRWTnJqBzB",
  "key3": "3xWKtx9HxpLMUdCuhCLSTbptNy9Cf6z3zonax8e6DekBxqp8MmagDuTHJ8AQoCWro6AnES326gQhWMDbzkxsNUFt",
  "key4": "5cMBAo7tWsdr1FmAJSyjj7Rb9squjZqLfsmNeQWgDH8j87jGqR11tLMHsUggxpg3oirA6Z9e28GZwJHcnAj5WKih",
  "key5": "3DmwefxaYztWmUKUa1dVPWTKhtGgKszrRohswohzYfuL6Kqd3wsJ21JSPYcmWwKcKcaAim39vgSEiLLtazgffHuy",
  "key6": "56ft5wqSdtU8bDJftTxuNjPivAuUKzxJi3aP7LYheVbFZzuyM5SH7UCuMWQs8YSQHEh3XMysgzyESGfcdQCzFrj6",
  "key7": "5B8mR5KpwFkWSFi9d4AhudwFe6hf5CYubiJZfcBEsjaz22X6BoG3jEcT3ZtyMbTjGxqvEy2AYCfceDcoG5zJMGxC",
  "key8": "5gBb48hp65H6Bs2apY6BNWuDomDkE7EnPduwqEWwCGB2kux4jXLr3Twhz5M1eLQyYTUUg3pdUe2vd9r43wESM7kC",
  "key9": "61nE9nCRWArwq9DLLQSxL5Acp5mxToLUsGnD4A3Wkg1bhbvqt3JKyMPEiginvv5Vp8SC9XCcs4N431mBkXPEBEz1",
  "key10": "5Myn3A4X1JFwRV5GqFNeWTjBd4kiRdVzy8zmnvyiFfjs4QbjNyPV3HjbFUx4vxJKY6qp5hey4TuKirBVRAVJjoou",
  "key11": "5aAZaEARfKCi7p3BL6uZf5QKGx95s974wS2vjMV8RTrkV1qNAocasXwPwBDYFg5DkVbsYoYcEafP8vAp9tASn3hP",
  "key12": "LDyBcpZsbY9iTnBbE36DGncZFLfLVcggjDMfDSZh2KcECPbEoAFPwUqVpvepDjF5Q4i8uqCWXnXiL24k4E9koFL",
  "key13": "nK6SvqNWJqSJmk46Edok7AY2j2QtaDMTBzEzkH3VG9mBChjCLwKS8BUahs7rU9W638CQKBZjviLqP9JvyZdASMP",
  "key14": "4pZwGN7SUgt4WbZ8A3LeAaJhWZS8s1vWdoMK34WYcTDcPYzLE2KPrPLxFfHh4dMfDQtnLwesPd4VULavSsJFdjZQ",
  "key15": "4KTKr4eZHfho4tAzqSx5ZH9XHAGmWf46AYCcdLYT4UgyCFgxp2NyZFQzG9W6h2riDTLHRu5tMUsNszZ22ZvSmQeK",
  "key16": "g5vK2PfE1rJyv78zGrDYBUyD9yEGJoGQL5XeDG1mVnivuvtg1JYQJxXmFwRY2NLq9wSybpq1w491TiLwpn9n7G4",
  "key17": "3sHBiEGC2zt7Hts3VR4YWYWjzCSVKSdAcsbL531kBvHWsRxSpaNvUVFHxVGT3546Y6fws3JGdax3sqinTeD9y1Ge",
  "key18": "2cmQoxKRrazXh1qmDV28AxgYdJHLqQQmjj2r6HPhtqxQu4F3MM4BLsFzx51Skwy6x9DxuPHCZcEw6oTPAbHcm3hC",
  "key19": "5bYhW1ZPF1pdTeN2AR6i7JoqiuagNKfEx2wt4vSp6CTuUu92NtPHrgau76TxQxCBioU5PczPfod8sZb3AnH9mJL8",
  "key20": "2FVbf4aUNkC5jRdtMwZWKJHKyHChE4LnY8oRYUQh6b1gSgCPrtncEATsYB4sG76BGeePri4qS77TrZ8HGzzNm5RG",
  "key21": "2ZxE43dXbc5tqx1BMntsxzN9FSTjjATu9QVGCjmnPzqrcjaXmABjeAn5ST86HUDFtonVTTYGeKh56ZPjjsTXvixS",
  "key22": "3xrm335xybJuunprkh8DWmMcazndbYxXAS2YD2xewtCHr1gzGSG3m2rTZo1J97kv645S3WyFvKnDiNYy2h8RXhtH",
  "key23": "2tD5wKmQyCTADeHYj684cCSzoa6KYkB454TJfjoDBmeFvxYwwd4KG3qRyki7knfKvHH5yAGjT17xzBziE61QMNeN",
  "key24": "4MTkWqYUaPgokky81YY39VDpgZ7K53vmtVvcuWXCgqoe1eW7ont9UTZyPPTf7UabGPN8XR1MVcGsFTf1z2m3Vsos",
  "key25": "4TgbFswLjxp4mojM7Tb76dWHkMwHT4mcAPPHEHW73d3QEYdB1sxfk1CUHfARqio9ProQhSY3vTKcATP8my9a1Gxj",
  "key26": "5v32FyUFasYD8aG47HDUzaauLUv6kpgDpGjiy2mWLxjTtYsS2e2eiTCAPif8ZbQ5zzWK8DY4AEn4xaE5vRsvgf6Y",
  "key27": "3HWwC6WaKwKX81jaVpmb6mWkx32kZuTgf55ynGwtiVv499qH3N64zuZDPcos5cuCgz13Lt5DkDu9B5tF2xHB8zH",
  "key28": "5maWufbzNhdAyJ4fNwk1Fotg2Nhfp15hX6Ee35u4YxFJRZaVVA9pgWHEFkyNXvJdjXKEL2xH1t4ydCWnX3e3wChx",
  "key29": "4XkXpjq2Vq8LuDRde6KFJ1vT5TBQFvSeDhdA2riLaq4Mb68aKovNF2xLNKVL1qxN9PzVxWW7AnQNJ3WxEUCt1bLg",
  "key30": "SHaYLQk25ueCxD3kkqJRqMnNV92UPzE2Q5H17vEsHaR5S51Bz5M5aqqqjBsgjeXjxH8pnAA36EPB2VDQJC9hPsu",
  "key31": "38pYzSzAES7iSen8g5Eag1v9dpV51Xos2dtyq69bEan2p5Wckk68ZMqGGgikLKPKEbUWXUvtLTupD9EVqyVADMpA",
  "key32": "HsKhTnbyCgrzXMBsKR4LnZ1e3yYV1PDzt4YcEkn4t6z9oiwZwDHbCbpLvD68aebekJTyVezy9QmW8oQQWua7GkP",
  "key33": "5Bu8ahPSUJK59FiBP4hhrQShrkv6iT74b3TV8pxNJGAyi6wLRgc9uh6pWtKwjoBd6LxqmJoSBqNxMYwRA5VmZnwP",
  "key34": "3BydSoThW5hRPTecxvzrSjQerqWkdujvB4XEXjW69vhs27L5w6pZnvRsy3oVzhaKdwcJ6KGu9csdtKmsCw72HrQJ",
  "key35": "3jQ86JSXNPomveQGPBcesAoSV4d1tHsEytU9UzARGgSjjtLz5WXfiAja8hwc9fGUKLryrZHK9D6U2xv2YEXDrC6b",
  "key36": "4pzzv9Ppknhnv7tY6nFWPUGvNJ3yvtqe8nkJXCscPvPCcz3uqdstezRjPbHeJCJbDvKvPLtcpPvKM2GuPAzygB9a",
  "key37": "4gHt82ShF5YfGUJ6CLYvwkadBYyzncXDPBdrFYdwfppEnLDAULmmMmUbb9Gbn4c8UhBwPhCQSDpfxo7En8vcBHVN",
  "key38": "pAYMpQyEgF3X5c8WjWk5VrZPKWm2px3rtdJQfLwAQKhPG5NPa2kmL7GHSPsbgowcay3SHSiiY45nxRR1DDaFQhq",
  "key39": "2FLocNMirgitM7JsxEmeG2whsJrMFfTfbVdJ5VqjdqrCT5foskn7q7tnEeSMGRynQ3KUhqfG4oT8BmVLBpweeyar",
  "key40": "2BAqoQmQzGgSd8Dqptjv1eKWLw96NzWUQeGtYWVkD3XM98xdZGt9bPXivRMgi4cPKrFAmpKT4kLnTbQHQuNJPDep"
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
