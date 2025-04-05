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
    "yvfoj42TrfeBzbWgV9kmZRV6qsCaprDjkyR5xoNvnSJPsH4Vf7WJrNHh7tGYFQq5GdRdc2NefsLHPmuocFcvZvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ew1nxjX9pbgxmPmHnaNmGca9pB7myrDKE1rvqtXuCK8EhwaBaBZDfy8TQuQyrLF2kivdHS1wGvZqpwKbn423zVk",
  "key1": "4cHrSvQReAvQJ6MqfDjqrwSVM6FeVLMrHk2KJmevDF98bdYFKjxDW7Th8d16uJU7zzfyg3gmWR5rTMih1MbVMnqR",
  "key2": "2Mo7C8vhv5DdaG5k9HyjjRf5fvWtiXsGKZXAwzDg71evy4JwYX2hL1N3rHmWw3rq7r7dUf74TVByXZpNk9Bz4wpK",
  "key3": "2RicCYcBR45gLXSf4fwjzDAVh6aApF14FpgdgddyYR1ELHbgdfnjkpmju4LkVFknf5eJxxYYV1LijaUDn1QuqcHM",
  "key4": "2pS4ktmToZmN2YfVwBbCdBrrEPp5AZXQMSQMoVmqoX4fnyySXjpaZRjSBaeaQ7RG9Uk2NEV4dtcFF6JThrwo6Nh1",
  "key5": "4JkiPRsBjJ56EvhfRSdDDbNawibEe6iRveqWHpTyGTx9uz8o62jfiudhCExXuA357CnpXNx68auCfArEks5y59qg",
  "key6": "2jXKE8ng2b8up1gknJ1fe9xmpfRYQ9LanXuWqGJSKvnY3Dc1jVfVXumCekj9TgXXd7xXagK8qukiwTjBBVqSszz",
  "key7": "8xzWzMF7u8fXMxSXVcstqRULjWYXZDxw2XFQtn6N2VHd7XcYXLA1hSCfudL9N5Uep8b5y8n4JfPKLE9575oUwCw",
  "key8": "2e7XQ57sYCnN9z85zB2QWUR4L2iBp2bWhrqQFPb4GYCTo9Vs2vVxFKXYhVsgS855XAkgwqPjnVMrGdYi285NGAhL",
  "key9": "4yEKsX9SdNcvEq5c3YMtnJK5SCs38EFGZMcc2VwSsSNKr8XM7XzRMTRd8XTS6u7hJVVCTkuvpeekf783vNy31JHz",
  "key10": "5zUUx4WdMq7bAVevkXyZ4Zgx4UUfhoxV3vRXZvNabLmSs4i8HMGYFRbFA7Qc8QBpa7a9N9RUsrQRv1FtVbEdSQn9",
  "key11": "1Mcvzg1Zeqvo2ia8183MVGWbdC7SAU74r2V5isoJ6RU8qQRFkK5AKyn6dMSe9nS17MFzXvEZHB1KnvPioSauHe1",
  "key12": "3YYUy5jHwRDSM6bnqcBax8DLbJ8jY9jciUidjY4vERUNug1np89R1pA3kptzdwYPsBSEZBoepxADy9xV9YkRwFju",
  "key13": "JTog8w3RsV9eHv8yg37UmLR2m8eGVesgn61pRQg6rU41GV8Rs89UeAGsgX4A9R9TyYCa6fEEeAKK4k4JtHrHe2Q",
  "key14": "3vYk2ytUyGAQq9AVMb1H46AwciYLtMSrSF8sEVVcG4ncY5MPsiDHT2avnMhdJSpVXGjAdm6kS53SXi4GHNJ6AkBQ",
  "key15": "2GHcSnXfKiqGor9ggxhtCWSfA5u9BqJ3moC8NPij1cY4FE1wC8KBeLspmGDA9QxyqFAN5PC2weXqkioXkkGA9qZZ",
  "key16": "azjFoNhvB39tW4uqumJdtC4ULL2RxcdT5iNPAss4jeio4qN9nXtGXKz5iK2UrzqFDKd5AGBJQRPubEufoz9FhF6",
  "key17": "1c7TrxUESyBGVFTSb6og9kDgewZ4qMB7D3V7hiroHPhrnjwiLDZSznz49eWU4XNWzSZngUWHsvnw5Wuuk8p6TH",
  "key18": "48ufLaLio8YHtBrQFuwcxkXKNj85PAU69t2Tjo4rXaJmno9PrDT3HET9b4NqQjnqVqipKvBZ6Fa2oeFDPuvafJPg",
  "key19": "4tispp8nfPCLF4dsFzs5wySV7GqLQQdAQHVu8zmmJEM9MEwEoJqFazY4TvRyTRdM9bdv8QzPzQvqkPtBMPQiVRR2",
  "key20": "57JKN9NFmajionizNK6zNQBweYTFt45panzLPgYWTXwLqKtgENN9acdDhDjRmhxhAvfzVVzmxhkLDqJMomAFPmkF",
  "key21": "45QvwTZrv4dN5Q5qzLimgjhAGPn1qERQoCdmyhErLHk5C9szZtmYhTy9q1LkecfJbjinPMdTrQrsVDKzaiwcenh",
  "key22": "62D52XtJDW52kBgaA8jxCrVAypyPeAiudxHKHruNrKRJMk6rwwjNgfUJAKQhYytpH4ghwGbWKcYjJgM2oaveW6LS",
  "key23": "43srBKGT5npKAKHteZ1rDMAaoeDxtyW5CQt6zd3QYoGBcJzWWt8zmG2pRwKQfx4FfBqSQvwy3ovVJbBKYaebHvy9",
  "key24": "2Uzo58DgBnZhy2dATtnqR1jgioExZX3RmrEHtBSnVMsRqfyMDHWMECuAQiVzqXJp2CP72NzgjaL6Qqr3J1cyMDU5",
  "key25": "2B2nm2U8Uo2bZp21vmodYiBXGPpwQi2u7sos1WcocnDSvqUPtRD2LGSEZp8JWGM32PYf94LhmH36RYRd1gs72vWc",
  "key26": "2sUCDrmzQczWpvLLXs59Bsbj7fVa3TnFYspq3WBSF5sRtWVZLrRcZetrnSEdeUpWAgiVAi8odtGZsdq3TF9meEj4",
  "key27": "5vgFEcrgE5HJ8N1ZTLBejQxPasvUeYR42nmzjEzJBWG34EeybRS4YZtdM95bgrbryX2LUUSFXX99zqAHFqogoWMS",
  "key28": "DUPD1cjLD5SZpuXgNMr4KVZmxsvDpoRSDfH8PH6QDC2jBYHpG1M4Sp2cEByGFMmEXmND9d3BpjtLKAo2KJvwKTn",
  "key29": "4SKdKU86g4YCotnLNTkVQMzzMGzJpUKFSPiSdHb8RgLfr8r5dCHg8nQSYmXoQBGkVwVkBrCAcx7SXJbVYue27VTY",
  "key30": "3kmeT7fAvSHcHG5JHSrPYbyUp1qyhC9UpXkfYTEhBhhFXu8F6X6Jp2pVtmG4mBXZbqyCKxxVEHektozQdGxL7hFU",
  "key31": "3AKymSk4MdCzwmJyehbj4Zp8Zp5hPd7A16EidT6w9ah79d9bDPoXy2GkughjpMhG9Zmm9BNC48zsQ31ceDeyMnQb",
  "key32": "3LUe9AFk43yYXZbY2ghsooaHLXpvAQZZ2cJhkdNa9vMaEy2rF87851zuatyTLkoeyUQt9C2U3T12GXn5gSF9xmD",
  "key33": "5fEXDtxkqxwpsY1TFq6wrq72w9Ab21XJpZBGte2wx2dNhBqimUFVcGhmB86mAR2AkxHc8AWHaiqYmtQriDMbatDX",
  "key34": "2GPCmANJACSPJHRGP2M8pQP5z7Z9H1vboxmtSHMDtgaAQwofgwZ44g154r9Nmgf3R1BuqQ2LbL3vz6g1CiK69zCX",
  "key35": "5LTy5DJpyjxjnU1xnBsCsmLoeWyyjRjpfMLcwRiHafy3NHnxuDNk88SJ6tfnAK3SSxJcNrF5kvpDAWuJGCSeCmMK",
  "key36": "26k4WUgrgoGtJtJHjQ1C6DD8nJGn1YKSDyV1QZ1A96AMTvrjjJAwd9YYvs9YYWM9g2Y4CMLZEJV5HdxNJUaafs6i",
  "key37": "54HwXwy8m9DGK5YXPCoz8D1wWJjUTwiRL6B4EsoZuLukSJWjwvx2cXwFQ8q3mHpnCTHjhcrcouBnhyHjDDzSRzHN",
  "key38": "4TYUE1uGf9fwicPYHGRoz2XqzQxwdmowDqcxet3aFayr8MXhU7eeP2hzet9pLicXEGXkd5TDdLgZy17G8F89bmuE",
  "key39": "2roDYPoeor84SWtMDaEBu9gKr6SRxPADmwNEMu3x8gCTxjx7Y216sjsXpf6PaqPshdKde1Tn4A1fbH9ia7ZQRiFc",
  "key40": "4bdq4dpkqKhXiQpWYsXphULAKN5LQpgQaMnHYk6sSJuHBwF7KaGxqYtnWoPUyak2mxuk1x2o4oXtHwRRztPZZHJE",
  "key41": "3k5zf6QVNyABrWWg9o1E41a6qHCuP8xtWZatuRdnc2HXjwYabDKXsaqdcVUqcoxpJ8cWZwRvvCwVjCWpLijSrfWW",
  "key42": "5d9MhjJkpfgaozNKeYqxeQvAdmv258A6sS6FKKcFYEmcUVwRMLaT19XydJfKPaHX38dc8ddauuZd8v9zvJkALGMW"
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
