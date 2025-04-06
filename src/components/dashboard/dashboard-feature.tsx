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
    "5LGp7CbUfvEnqD7adJUo7BGa31fLdqLDERRFyHX7aczGYNLhFuyRPGmw2131Ci8tGFC7iQSCR7c6KDZacQGSfnEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1dn1tMfGcmfL4PHpD5aP33zXHxUXsn7S4hYagST6MUGkRYmEjumu2PcnbTVoqF5AB48DHJzmVzy8LzCKbJAoFrk",
  "key1": "21xANqsuGi1CPvniMENMzZhquZMT3hrUSGpQLaMnWzHRy7XmUJGwJBxib5BAz7hfTFU4AFGWRJZ69pkodS9qrwFZ",
  "key2": "pWPrKn1UuFaVArUqYV1S2bc2g9Y6WHKQEJF6LXnXyCfUPShCHi8MRfD4pzhjtQJD8Vk3ZfQJjvkvPYWEzVCYCBk",
  "key3": "3rv2Sdntc3mPBzf7hUq1QTxTp9QyHMCab7beM6mG9bzgpR1AsbE1apPqWt1h1TzNG12Un3fG43kfenbjGD1HvXep",
  "key4": "3m7gSJxA2C2Pcq8yzHSnQ34osHYc5s3L1jbEuGy9CoH1nxY4thJ3PZQ5PgzDyVLGWevKfPCKdcqbEpbTdXrxNetP",
  "key5": "242cHzRZpDk3hx1PKyfuhzczyD79Wd7xjBYy5moK6T64hYyQVAjSrawKdCsZCVbBSNvmRa4DTDWr6vifiFyqgVqk",
  "key6": "EEdnp2Tjx25E2GByaSYMZQkzc7kpa1h8xohcefiSwb5wDvLjGuAuiNqrSnTRDmV4QgzMa1wAuUJeJDoopqivFeW",
  "key7": "geGC1e12hA42szjY3ayirVuckvrbs26j8xsxJ2wC5af3etriyHwuHYHTfunZzxnPAMqcRbxd3LoqAC3bD3YYvJw",
  "key8": "5YJzkz71afYJAjDyr5X9YJYLGfQHZFMDPaEXbEa9hDVvWCsuGQ725RFUtozRSKBUiKd9naTyDndanbbSGneGz1is",
  "key9": "2rsUzBCf8iEhbyb46AXLUvGURngmkgNB5rQzmi1KnRQYwf6BoYbNTemf4283TAfMMG9oZFCBe5uMgTV6ogpTQaJ4",
  "key10": "4aasXNABFH41pkz3f2Dcc8t5YJwWthsCubUdLuJ9nu18uvBpMtc2jsWyDqARRiTMccBL2f2v7HEPuThhaaJwgwkM",
  "key11": "3zw5n54TWy4T72N5zHA1iZE6eVmwNK1c2sNAirEuaZdG4UZXHitV3qUcYLoJsN4VvQkhY5Sc5VKsEXGraRrRQc8S",
  "key12": "4ADAJDdPnvT45xYxC5JNY5oHfCRXfh5o6AeWctYYwwfo9oAyE87gwNETpwX3CyJpQWD6ZM1AMrYq1jBv6uzcx688",
  "key13": "4XK2KwVJTGSLEACRFxck8H1BhE133rc7ef61qfUdEAtawkpLdeiXQBUEzztTFUBQsGps1kueJjS63VCpfwUcjDc8",
  "key14": "2xnHhJArDtLL4TmqNZQg3fvuxyVjDxehwYeADNnyAhdu5ikVLUCzUXsgzHnQk7UhGr7AVAFeUQcW6eHrbNHqDPCN",
  "key15": "ji7siNKkHqtXPcgyeggUHG7biD9gqm1M8chMZodAB1rgmZ9JTKzVKER7sRFJRYPS6D6ZjmqPt9W9PBan94Nv43C",
  "key16": "VSKybhNSdZNumg18FvjVSy1a3fADiie78hdLLUPR6NRDnmTQAh2eb6karF5k8PETMhxAmJGUBuBdfpvYyowPc6c",
  "key17": "3BgiJRWikjCcr8MCPVK8sDqRDZRoJPyCTFaZSvcYNoJ7spYokCDrmBaEm2oTARmfJ1K45pnJHG2bvxSkkgdNe8fV",
  "key18": "24pA3R6cVMT97wvHFYvtjo8et21RvFM9NDK4cJme783UkewN5vG6rZSkBpVrugAcgHv9SV5b7DyHaaPSRt8Y854h",
  "key19": "51kefACqByHojGf6wKzy4nhczMquQDmyFSjXqRBZxkKvP56gakhYcXbDjYkjVzkUPVPZFBWWfx9LanPjkSUr5hXx",
  "key20": "5ZofTbiZGfPyXo4aKVCm1p99CNXAMHRRxFA47wnXQax5cyJVYoxPcimXaU1KtnMN9GNAGCG48KaR8K9a3eEHPzh3",
  "key21": "2M6P7QrahPFyJkDjACiD7ZnXB2nJZjug6urUPvNGnK8JFJLAYa6z52fPci9YDQmxUd2dWtcSbrdw5xw2ZqPjcdxk",
  "key22": "2MvxTQa9wLFGQ4q1z1gnbAaN8ckeWhcmzAeoc6DnLJoK7BeUKToWFJencBCHG41ZSXrzKDSGcn89Nkw4mvbjq7Uh",
  "key23": "2KXiH39TjNFbn2d1ND72VhgoX2EdwDVQbtUvNvXFpCeLzbdReDkrpHRwh6DFpXLpzLuEgtsS1v7wXeNjR7dffgmP",
  "key24": "5z2i2oeDxeuRaF1XeQ3cq3FWhUEtgRwwikdU39p2esYuDbBrypvheDpZcsgfXWM3bxPZhgBKuLsCXZhYneHkUAmk",
  "key25": "37pnSRHuE6crFcWnjbUGbKPFPa3HzyFJkGDWvZVU3J5GWiqGYE8oKb52ZVkS8kNfUZq1g53Rrrt4a6P93WtAiRFB",
  "key26": "4MwP4XEgaMN9rWfoXiBdVjesFADMvVFbSnTmgXhvSZsiose9vopvWvWwogEWkyvsrHd2E6dADsPJkkphvPp8p8t1",
  "key27": "544168nisKfbLpruSHziSzGQ1kAAeMRJmZR13gk4Ne5AqKfoyfX7p2t3ufsUZxVeKJHPVHnTYUhVUoqT52cMVT1V",
  "key28": "653WcfP4BW1JHU5ratEL2qByJd3C5gtPPb2hPeEozk6cCtu72SzgwsimXejnJDK8MXAZZoJARH9FJ1kMH2vo3CP8",
  "key29": "5dwANntUubg4wsJnLBo4oV9fLRpfP6qCBgQgArbic54QSqswVu2gMdzVc3X9r3ciP6NeSG1cP1AX3YdHAe2AmaKU",
  "key30": "2wZr9zjkiDGfJ4a4EafXQET7WXqGUD9aA9ZZAY6BG1NeBWH1PwJDdD728NxWG9z3XrY1yhAX1MWi566dFxZqbivV",
  "key31": "3N99ib8tMBiYbxUZYN69xRfP1G9cH38UhaRcdrMDs1TsBomy9tdNRnvqVXbknMxKAfzT77MhbrtucsZfcxeQTiDw",
  "key32": "YH6Y1Cbn38REZsC4oe1TMHxZRAQAVKKRHPGeVDJYxdTfb8VywgtggDRefUqur7hB2qXYfvGDdFmWBryRo9Sb4an",
  "key33": "2e4jefFAgu8jQmRUhMrhXtDqywa3EnYP2cKvdnAMQBrjxteHtDhEDrPVZExQ7rYJNANT4UP82KzDRXuKBPKDd4LV",
  "key34": "QDNWr2K8yAtrXG42Xe8ssMBZLhDfcQKtDCtzzu5sMncrD7NgwtgPfWFTNtfzkr8L32FD9vfMgz9iavqh87hVg1s"
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
