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
    "37h769A1VTX3wTRCpJjRpNaUTtnpj3y3ePmrTDzzxbsmAPUEoxc3fz31S11pLqyRUDFGnS45NVeYuVVANNFuz2yP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64TQKqxnxagdmxujr6z48BiPBgYxHxKqJpqbzWzyNu2sTJ7J7fWvez6Qciwcm7XyiqhCXiPj7X2Ac4FHipzCCuhG",
  "key1": "41vcMvnTbdhNsTzS94yNMq3jWn6s4UAErkPHkfiawuC4GpgMqdZzKgVuno6iq5DDNsLHuR8dfiHXvoXXAywkqAbh",
  "key2": "3tSJkWQAWrLa14h1hvQomYgoCvuSuMnRo1VCLrrmnTzribBV5Bkxee1CepFM44zYHvRj2R41YEtVnifEmfRRGhwc",
  "key3": "2EzQBmvejALeVmKCvcvfjKpiyFz4u1eBFmxvotmQRRGNUQNYsNDGgfrwD4gvrcvTL3Pz7FYWesh3SP89SoPBTGoY",
  "key4": "22tMSuuLpxGveYwGrv4E6v3ygMzPxj7P3VcR12G8bmYW9wuDVxsuCu1pzncfGshSt9RHZL56RzgQqyyEoUJXkam9",
  "key5": "2iU7Qf4VHioYGo9FZ5DJR7iX3TutX4SrjsqzXuYNRE1GYyZVaMEMrSFS2PSULRXzsF76mwUsJYvrSSadPwWgf4sv",
  "key6": "5R4jyG9rHuc5JPrRbbUE4f93TXiqb5DnZGQFG1Ak5ciRNDDfhatv7DAwcSQLWcx5fkCrfyvU8G6mvGoMKtdvoFpG",
  "key7": "Kvgi2gZj1WXqZqYa69GsCuZCqw6EfA4ApP3hLj1V7gjRTSXjXkmWdtZKvSzLD9sYy8EMmLz6cAccA2wYtwutCaM",
  "key8": "2KNkzH98QpWPbpnJnxmrid6Xzbo5BjAkTADEJv6xwNYRRxbXidZxXoAWLesVxH2jnfbnUAH1pn27LXg8bpMYzBSk",
  "key9": "4kkNkoiQYEL5PiHX7JTkQf4tipq4gmRC79ZYzNorLrWHd4uKfwkAkAUgWimdeL7ni9NJfoCAdLbXsH71ShU6b6Z5",
  "key10": "4BSqyP7MmcwZkRz4qEPaNPgrGqEmnRXfFfGpUMwZwQTc6KKK8Zk9yuJtTVEjCuowuFTMy5h69Xjf9ZNU9DYumWiG",
  "key11": "4k8fGBoJcB27PuxJBYQTFZvYBpKXpujLtfSD3g7JrEkJxtQdzA4yRz7hmF65q67SsAhLXqNAECUopM7hZS6jbruS",
  "key12": "aZamfa51B3SKjKp79jVknwTNtcv8AgCwNBqhvkxF962HxtNfWRZdGNeBXpwDMiZuvZq85oh4M1Qc3GNzD7hMrGs",
  "key13": "3mzh7FPPHAtcnAkXLKb7VBxtNPQSSFnX26vKCqruFDD9mFC3fX1gfx9DuXgmrTB1VsQoEVVrMhAg6wL1eJX9A5nD",
  "key14": "csUi5KnE4JaURox558zSiGGRucETbnxBKvrjg8GqEAWjFSTkN7CnFG88QXqttu3fAfGjxFqnTjjN1bYrxCCW7qz",
  "key15": "3Y5ub7a6L9G7ayiDvyp6bPDXMvAqZCvmXmVkvpd8nTJxdeqYf2AkhGZGc1rTUKmttGAQf8MkR2ShWnahAELieUbD",
  "key16": "RvU6jku4y5ymBuySZVYrriridXjZPmnkjn8kvgWF7cUDMaDqSayf2ScovLu7Suf8XVbvjzUNA3KH9QqxuERoC2Z",
  "key17": "54P5Lqr7AG8n3am3V6A6WUcXjT5srpU1BesY8Jqn3s5w9JERko9i7aQ7crp64aT1EwpeVYf1tXWjuHCbi5AqMcLL",
  "key18": "4XYZiHZp5MvAJDRXSYnazhkEwNn1jhT5YXDhNyCHdMftrvHvFGfopFhTLx4LsLE7iyg5ahKk6GbmFddpWLjiDLDZ",
  "key19": "65iK5FHZhYZ2HJC7BFQDgJNT9XkGkKQTRhwjf7b6QNPmcPq93r5jUc7XD6wSwVVswoXupXUGN2ithJdqgeZq7881",
  "key20": "qkBCXpMVPDPyH2iVJqKcYFJrbcUasxG1ECGGoxr2uVdeknt6vcM7BNwCQy3JC7VWdo1z4w2LsKPuJed6B4FHFJ2",
  "key21": "4JtcwovYEEoqgi7mBzBw2tyZ49czNRidKkpDDHwPwN77Xfr8v1cyVxza23BMCNtgog5TsoyAWcqot1xbyCp8wBTm",
  "key22": "2m6vdv5TsNBk8k5F5gqLaF2fQERDMcpmsiW37GndFFqa8U3RswvE9vtF7BE6JUrGeDZd1KkAGNotQDCfV75BxSkk",
  "key23": "HGTw1QkmYMDwGtfCDv1v1o61DmC9sF891Xj4EZeFrxZ9MuRuhJ1fKbAKGK9y3eEMcJHGy2mJnsz6XZTnJWz25NT",
  "key24": "4GuySeh57Exi124WSD4ofxGakiFwfRE2Yco1PoRSbCFw8Zit8WaRMN6LB5opg9XrNUP72cpvLEpoQEnD4wyjiCzg",
  "key25": "4Nkzbb81npbejSKU3KGATF9EwVsQXNfV5XbEP1zuxckvtNQeTvihw1Ui3Vs9QbxdghX244AwWfvuoXStSMHmogYA",
  "key26": "3rWGEyh5vrxo4seyDWNDzisqju7PyYPfiLGUaBRqiwbRu7TcBw3T8cMw7sdQizAuV5ryAKEb25Lr23UTkCVr7DgK",
  "key27": "4VzFn3rM2KLg5Zr69CCPNiT4CTLSsfs1KvGvKHn8s5RQ4zt5GKzkCCTE7vbJfUKNS3gMVmJ5BNScrUbn47chKz57",
  "key28": "geL7R3oomsw3MXYaShdZ3vwv172pgH76DW8yfyBn2HtZfgdZHMYWudnTubxoPqmMu9DXXFAJhyc5wayytKYLxHn",
  "key29": "2AX3hxyUu9Mtt6PT2Bvg6Ep9vBPKpFPvGDu9wnTbob9RzjbYpg2ppB4p6hRJuCxvGPYTxYf59ofXQujhfDgeTnye",
  "key30": "7fbY5gTTTCatsdrxFt3QaE5wHAe5v1uRpzh9mjq4wpfFfhiLzXopGDpvDcdgzH5B7GCb1qfhfZaE4FY7Cm81SYG",
  "key31": "4JCRWbTvTs6vNH15RUzdcCK95mJAQnk3JdzuBdYj55SFLXpMZAn8tUgW7GGV9FKNfT4byi58vMd5cBoE2AtuFdrb",
  "key32": "45uKZjPHZ3V8NoHTg11N8YXJmfukPRSMwVC5RCR8cSFXkXUHFxMcqwpsNXPin8BFN1HsCpjWSpfRAs3PMuHTgJGU",
  "key33": "4TrGBTZQm2P1ATA6gasvMi6HiX5UzR7Rs5Hwacq1HxWPSxbycPtxs5n75YentvQLbfKCpWKeZeeFTpF86ibyC6MU",
  "key34": "3VHyTj9NiJBks5BpU9vLUyi4ZmGJXF7BbdHEjgUYgAQaKPRK5d7b2fsQbNDtKt39fB7DHKPbbAQT2BLz1c9SZxWS",
  "key35": "34MWo7VfWP7LAwMgcHM49uwYVD96GTqvQiGxtRi7mvq4jEgw6FzdXe7gaMY7e9dGWg7mbV3YApM1w8pQkGMdaZZo",
  "key36": "2sFPcN8T9trCNmV4Gg7RZQU5qX7bTp5Z4Zu8s2h95QtbncrBmhMCTkVVRnaPLFuVYa9219G2zbDFNuFe6xF1yaVC",
  "key37": "4cTBQU9pQ8xbnu2HkUSqgDkKzbqiRX16v36ZTLKVYuCxGS2tFJCUE1vue5ifiZ5joGgFSUTqfa5qL37Zckefgps5",
  "key38": "2kEtL2J4AgZKYhzXmrcjvWpBZ1xinC29DJq7kkmLdY4jb2xoT2XhJTBnNRFHPBEo9BvWBBNf3Wo9C6hZV6QUpEuC"
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
