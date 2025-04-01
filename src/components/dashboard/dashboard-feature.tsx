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
    "3yb19Gy9C6QTWwvweaepvfepDgUCYnk1aGmRN8ta79sgMGvG52wGMPx3U3tB2bmTkeLBExPmXNRs5jQQmxcDZVSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WiwCtoeQzQmpQUBzGf5hi4arhdUBBCFRPFjU84UQx9Z1Koc5wFJanMHKmXtMHKBFRs12hLskndP97ctMBgyyrRs",
  "key1": "5otr21MmWxtN9rf5cBsDrmK2bXA1yJXEQGwJo21hWUiw3TYFGnRnxMi6EPKmrBEig1KfWdHQwgLKXWZbaybDuRtq",
  "key2": "33Ukw3TWoeWnyb4VBcutg4MaHdWEDJ8aK2XkSxY8zSs6QgMsngK3R19k66CaqtWHZ5GjYfWeYfKhHpwarcupTyzX",
  "key3": "681gCM6dPpxV1EUQgP1u5rxVLYk4qTbXo7wdvViY8eFNbP4oreJHm4cPbphhWiz5tsNzx8eu9fjDzpQea8wFbsj",
  "key4": "2jL9KbffXPoPD9z5LGXz4oVkcqYk513KxVi6Ds7KBHet1pYncv3KK5QxDo8MmKD2XbFYWeWniSw7GvmRNkLuUuYs",
  "key5": "GwoByj81A9LVHnZ3vZrpuvtWg9YkJx6hu8od1rqkzxW6MB3Bsm7XAw46tqXsCVznLDmFvX9UsrD3NG1jC1eGDpJ",
  "key6": "5RT9MXq57msjqMJveE9DmF3NzbTpPbHmUuPwynVz6FQUGV13McV2YuLDrRVizevFgUDvBZXRRoB4LY5q1jeC9SxJ",
  "key7": "A6PoiT5uuonkAh85SYJXcy3iLYkvAx8gM37PKDvk7R2NtJ9h1T2PFsYsmyDduLPfCvBhx7R1C2d8SDb1FaZJggE",
  "key8": "4YmkwkWdprovb83zAmXVKZLF3d5GmCJRpKsAWcmbprdcYsV2WstUhoBqmg44NKqGUUXea69zYfANwMe5AFwcT9iJ",
  "key9": "5ofqrFi1Pt5nkuX2vuDYQdeYQYN5WTtfDQLmy9en1kVCZmRLEFFpa13ssco5obQrvVZpFBWmks5tJP2kNxiGQE6x",
  "key10": "s9WuzmmVSTTKUCZWUQioxqm93F5hvngVKffBwo3R68FEQ7f4bbuzaMfxUiVUR3qfPaU9ypdrDHTbYfKppXHo57A",
  "key11": "2ZqJAzZK9rUa6cXLbf9WiU87GXe8xEnv1C2ZB4ZBVcxz39o3D3rVAcyxp7bSt2pindPRMxfB16G9kUqVDjd8zad9",
  "key12": "2FV8YqVCQ1Zn12S6WnkM1S5Lha66cxuB4d2DqZdGGexY41gQGnw2JwbF1RRzYbig2xk7cNyemp7iNPm1HpXNeJz5",
  "key13": "3iAAeXvGxuRDjun7p8RYCQdqE2XjSk3BrRMLDuRDdxvV9mazQrBvweWDuXMgsNMuaq8sGsnLJj31XD5n2kXb72p4",
  "key14": "xNh7Kbzn9BXJJPzHshQDCBSQ4vRSeJZSP4GdRPV1ksG87evFe6vkLYYUCgHWW9JbQSgHqXMNpFmTbMMAzhwZndr",
  "key15": "2GCB8X4Efk3VaVKsQBiRatCCZTcLTib2kJEWKZrmsvhy196jCLLdZ4m3o1s8zSymxF1ZvdDSKrqo1733FJKEBCKh",
  "key16": "3snCNxDw5hkHbHdSXmRLtf8RfCRpWZtV1zAQr9wY1voyyCzkvvH33AD3YrKyE3ZGCku7CdbSDRBTzcVaa9kEcWQV",
  "key17": "5JkJbeoXfHVJwrvhmY7Mv4WJ8RBdi3jcBmAaiwtGD3Qg3nucFGiQzb5cvDKbxCBcqzHSxdxYqgkkiaTRGZW2qrpq",
  "key18": "3kx7Nr76rAf12DFNUK3VqVo2UbkpYkkSnGvQTZJq8YN8SPrXvdSraBaZyEGYYzH3D7x88Mpn9h11QHHRfzw2Yt7u",
  "key19": "2iJVtSDFnqH1onFUrvmGmphCuQkhRws8ypiT4DqBPadqLqeM8Fd6hdmvLvoZwjXmfQaXpmuCaAMCNFxhxpLaF2WS",
  "key20": "29ruXHYa7yc9WFMsirFpTsV9m1GzgVVWd7jFSgK5XJMQmcxuGpzy67mbhrj9kY4H2zVbdbeS8gyS3LZzNFcPJxHk",
  "key21": "27Q3MVUVhLnvvfG6bDcp9H1ntFWudzKArCix5otXhvALc4vhK6PCcibFDRZmFv7EieitHc9DioARr3skzHpWqdS7",
  "key22": "sR8gcpwP4tGbZK3JEcBj4q4WxM5WxBMo7hZXZWWaYWgsfWDvoNWNoezbezgz2vkEhBwFtwm4inaiCNsaexegwX6",
  "key23": "BLvwCz4bqqwHARVE9Z6P4CqJaVsx9CX68sKpx4qvDF1bd54UU85LYPz1yk7oUUcJFGZDBgUHR568GMk9KZChy6F",
  "key24": "2RqfouZR7Z691ZHm7TnHcKwpiDRKnHQ7j9c4RF3844mvEQX983vYVyXiVcQtQ1hkGnrvxQsnsTfANehgkBZBcAuB",
  "key25": "b7dLGD15Cx8UHLLxX84yr9drNZQoYK31y5shNLxcWb6RdWM5bYwDT44r8NcJqkMC1qBiyJLzUEPNpzGaJyBgLs1",
  "key26": "67jMuXXStzUyVgEUFNMQ8doVJmN9uwf9vkVJ9HCKr7amCLTmrswNFccmWtMG1W19w6ruJcy2oEn1QB3sJHUfc3kV",
  "key27": "4X8TnbJGAJvhQpupX2E8Esjpb7Z3bb58gkCTPkT3BPE2uNcdJZt31juEq24rrE3FksAEf3qkHSHmkmLB1RzKDUHX",
  "key28": "Vc2cLCbtKMpy1bVpCW1t1a7sbRoFUPZoFWaVwHE1P39qpqHwQvfmr2wdCBhHvuoKVRMfeRuaDTkjbvFKsgVvUJb",
  "key29": "4o3rhtEgGFiufsREkwvbD6dXx9BtxeuMFxh2bUqpyHc8P1GzYNFrq7cKvzvmTxEBfD85GXuj7jgZWwgEqBStJTmF",
  "key30": "5qTMVcQ22JKmy6X11EtdwBhe6c7xZfAivJU8jVyK8j4f4DaPvhTKSF7Y8Jmdx6q3bkfFuuyTUGvLpnoP6FTknDps",
  "key31": "3Q3F61P6JRvNF6kLeEbCFjcvcaVL97qANpTy9RJKVFWV92qjyDep9eGjiNYfNcE4YxavjCbrfzG6XcQARfSuEfYS",
  "key32": "31jcVXhS7u1BMoPPpvc7bnZrALGw6tvKxZfUFbpL56kD7FPGUcWvbY1b4eHoU7LdpSntnBbaozKeYF1k3q5D7bd4",
  "key33": "3hr3zSJD76h89KbY2n3hDJ4R5oDTu8oe9CuYurLgzoPepUwPQ8wofUwAatuh9q5tfT2EADXCHF5x5rSSMnkmM6W"
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
