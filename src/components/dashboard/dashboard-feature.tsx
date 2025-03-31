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
    "3pBmPcuqeb8myo4tYkean7EVRMjSwxJJYMcC1e1kCzSDc6pqrpjS7s7duXW1vvE51udRRjVaQGYchnHZYoCSowic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FH8p5eAsG8SDWJ2qzWaRoJWGbcbp1kD8dihJkEg8AzGLxCmM9Ahd9d6Y8Hm5Zdf2eUKWckFZdABQtPt9KkFAqjv",
  "key1": "88DmGMcrrLupEk3JFhmM46RqTW1pthNAHFYdNbVVwX3NSWyHZcr6jeBfg7dpxJY3brgf28Lkd7ccVvxJFN15M29",
  "key2": "3dKAeGb9gm9eQMQyptcke7HQftqMdYxCsUVbof6iDjwGWHgmArVitN35eft4AJFguU8qF5pqycxixzLexuztfvXj",
  "key3": "3LXLet2Gjxfwj9enceiZoZYT2trJ87x48G4h2CizqxUrvY3hdnsajB4AwMSy8EJbvLFuEjBrHdfUS52gNt7fdYdo",
  "key4": "2WzmW8sm5DzgniKew4JBmka5uv5zYbkU4wN2gedBe9Bt5oQLdVyDRMVTegVZvcBEwyEhjE2RwTnYXwSmdXUWVWPt",
  "key5": "449oPBLjTw85F35wqguuCqsWHExt16XHXugYQMEZ3nn4kH4BEqssNiMVn7DUcNAH7TYhKUrKfZdPa846bXLC93V5",
  "key6": "xCXGihnbJxn2BNprystSF2P8cX1MD1D281rYuPGYgpaWBHCmu4p7ajLn5QS48BMvrVXWWLU5BtvLQqvxMcMPsdM",
  "key7": "5J8R7QrQAMvZV6kGFcES82bU1H9a9Hn6ENdDhu1Uuj34NHAXRFuW665hyk8ez4h15aqjo4deDvRgT6XFBwT76LN6",
  "key8": "2bf9zMtkQqfa3hRhFbGPchjTxjgCZkASnAukK2z88m2phGYM9RFaUPctDSyoAygT86mseZvyCmTVCJHFqKPiZaKQ",
  "key9": "25GXQ7urfCv55nRK9dKAgmUg27JmYv5auKCd9gFLaggarMEjiSAo1KZEyDCK1QsbJhemCmfDWYWRGxyA8cQTpWmZ",
  "key10": "2Lnui7j9i12aNWryjW8rHBceLSEwFSBC6J29Yu2AyQ5cLfvq59Mjdkk8JhZu2hccbzeJmRMLo6ts6vpzBk2ADSbh",
  "key11": "jJuCRwMx1e7unxk65Zm456V6YQarh99b83SSKXeq67RWGA4kcDDSj9V8pmcxhtR8jLGpZkuofscEcGQtDwSmzP8",
  "key12": "4Smn5TFi9Dhu35ddUSt2AL5iWV9RLmzUZyJBZz7HPEJ98kdKxjVatHxHrdp8at7L5eNikgi5pUqHZceP7zeDjHuU",
  "key13": "3eH9rzVa2M9qrfeCBS6wufhMms7PsoLDopS54jsRRdEha7amrkior85nHH8SJd6jC27Tm2oNWwHcDqmzaorGfkWe",
  "key14": "5YC95ENALYpnfvHCDRnWaY7k1K9g3KUnTeFAPzLqcB5XxcGhePTWqb4t1JYmYfUTUfsNsxBqaxtwHedPVcY4cDeL",
  "key15": "aYR4ExGriHTZHUDfC3Uo89hQwWeCzrr7T9HKDF9KWiYZfF4URHuYSsJ53fY9kRTsPQV2TJB4fw5QLUB3Nop2tS5",
  "key16": "3emqVP2ZPEHGNt3L5i8vi4HzX8G9H3hXGZnCB21rY41RCW43otieKqu1z51ZTLvK35PeGozyjp3HgPXBfkfTP2sE",
  "key17": "3UMe8uAHr6fMqBKNQuB8j5DFGePXNxtXsKvgHoSr6zVbtSa3CqKP2dnbxSPjjF6XwsDn68qdj9zg19xz4UxT8cyx",
  "key18": "34TcXwqB3ddMBnhzGGUQ83hQxuCvFttjnE6kryfa1kkdE16Y2u8dKSNitzxJM54ZJSD7bpR15a5PZ2Q7pkvXGvEe",
  "key19": "4FWHZbdyexNN2vL1Ry571zPrAV582zuy15ko8L5bgdkWsGKxhZxnsePaQziBLsUuvvWqQ4pS8wHwQpdQAX9csagx",
  "key20": "4nDvgHtvzH6Aj54LKXhi1jiXfinvWfji3LvnsZrxZB5V8nv4kr1xuvifyshojtQ6gA4SuhpMXqaUPgXRG1D7eRmW",
  "key21": "4j4Y25iLTP4APozLs4CmaXRJLvTmziJuX1GB8tq7UwEcEeBL88EcY1H5aYrNzzxEN1poDfZ13KdgArLtzEaEyN5k",
  "key22": "C5Qz1XRSsqdrsott7TJG1HukpTTYUuh8KCo61Vxrbxk6boetHN6bdsMNxhCzoLfWZSKm7ztD3k3qgYT2a7csZHn",
  "key23": "mM1rhk2f1tcm1H77TqDfeqc7FJ8hBer51Xe1tgMS3graGKahYkz5MuC1d3Xy8zBeJ49CXvc2ZQUTLHLuKRXZcwz",
  "key24": "5Z4CAvEmTmV8ZPBf79yixTcnViwDkbQAvnfEeVmv2hjzw3FUmQSded5gSD93Extz2HuUvnEjCwczmWLTnGMAFpRZ",
  "key25": "5Mw65BbqVQXUYUEUkMgNmrPMj5dhkUMueNohEJpRkAn4v4nPxZvfsnAuBmX4HQY1kL49xBKkC6tJHr7AsyJZbwAC",
  "key26": "ZddnGDBmYfLgRFkpyLrf74taionLLxhBrpwvLXWWEYTt3R9H852bJdNq6uRrxH4694Vxxqkw3Q9sCpRH52Mw8Zk",
  "key27": "51L9WG67hTtZXrUWbTHPqULfLALGeV1zevspoTMXY5j3Wmhhy7CyKLhiC5LQohfsdcMEWDpB25kSHDkt2cYFEiDf"
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
