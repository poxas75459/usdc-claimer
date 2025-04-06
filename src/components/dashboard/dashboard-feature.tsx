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
    "RBzP4D5fej4hV6PNLdF7t9oZhRreMsgrUpU3hyXmu4Bp2k2RQgWbKRh2A6N1VQmBGKiy1LmmtcB2ox9BL8zJMm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cXCvc7SVZFLxUKgnWfVTquL7WUkWdUqWp1aWPZTqxedGt4Ngi7trzKsU1iVDyGT8auJFmQMhchpwCySxHozFbH6",
  "key1": "4kaD3P57cCoTTxt1qUx79R3hKAaZUyrqm2pn1ApKkPudgxzn27jfyboDjtVrw25aRusoQdppn92wwykvtC3woDQ",
  "key2": "2WqgRPVUYFoxsYfoYwMtq42aoHNNk95Wie6r514aC5QyYDqDtrokk9intBSMWSmGAHPky5ENmHVnCrvaiM1VdHTZ",
  "key3": "2RYb4P1pnCBYai12T1v52s7fqSoTHQqCS2AqVqEJsNiEbXvhyoqgfpv8SBKprR4q4KVjcYsFheSDmS3oooMBRTXq",
  "key4": "4q6Snua2T6nucv68y3XFkQRvWZmSVuYPQaoiA1tCT5jE5DgC8VZPcujaHAtJLM6LDkThj6DsJUVbd8LjusnTYoMv",
  "key5": "8GRTVb7iSE9uRZxpGbtrrj7NdvcBUgupgV7brMzykd7k9pcCEb3MkDzNBiZc4BdUGtJd8PcWjLLV2VExAxv9sAH",
  "key6": "g9NucY77NJn3o4JewEBCV9ycfsAbbFzYXBt25y7RzqWfBdnsQ88WjMqfaGvMAPsfdL4UMGyunc6wJJ1MwuS2Pi2",
  "key7": "DsNYEiAQGoUwLEynpEAbKn5ApEayG6kNoyAXj8ywXUEkqPiexZQVq5c7kJwtBP2vwoSf6UV8tu8Tb4PNSvfmsRt",
  "key8": "5xD43JkwcpKpnRkz7gtxQcnp9bEAptPwbgPWB118LV12dbzvWCpWzB86MZB99SQ69MWJZ14rbr7zvCBpdQjVHauR",
  "key9": "3cR1q1bVRHsPVPnDMXDHwuEw2A1BXVeDkprDySn3S5ENrtadLdCkiwvQhctcYsLP375NdWPLL3hAuWuXtvV5XiEU",
  "key10": "27rXXMBSPqghK6CidcY4BG2pCtAKrAzESHPCcfQsMFCvXjehpEwvKzafAP4H3rjyyBErfAqY2SKxviYfZwYHRFDH",
  "key11": "5iWuaYRsS1gQcvYf7MEfFrc6VjmCbNGDvCLrNDiXyboCcad5iMuL1U2526LLPsstQNLM2cHuZD2u41EDdqAk27YN",
  "key12": "pd3ShSo4Wg7pQKGhpcNs8wLG4ngQFjqMPgnS3Apf5TmUdM6pRfVWZ3WauyV5EEahJD3C26eZ5A81Lwi2Vq8YmGB",
  "key13": "4bjVfAjmNbMh8YsJ2UFAMdiYkGXGFaUfWUzFMmhtecemXJXs814W1RKPvxM9hXMDWBKMnFGHh18GPEZ5otBw7QKP",
  "key14": "HtJZ6si77sSDUND7oNDVKyRkFc3enQTX5H1nUvmkhWXCYy41QwLxykQC7T4GC4skuNcn5gub8cv2srp8jdKjyz7",
  "key15": "4161peRigYV3zcufaBL9qE7Pao6iv1UKwVoc4w2WAabSV9kSN6xWjFe79xN236dDZXxNCZAYqNVBSDK9V8Qgf4Bx",
  "key16": "3hXV9ofQTg77GwUrZWK7PpFTUaz9KvoUQBbisjECzSgT4sqREahJmo77hpj4K7nAYruDPm7Zjd9vn5jq8kan5CFk",
  "key17": "4awuGxnVmJx8Hu2UFuJK9kuxiV7x772gyHHF3puW5Ja2hCzDv4yRR66M2hcExN1PQh7F1hdbxyDsP2G1zvzDg7RA",
  "key18": "5DEsrfhNHUGFzSnajyETBCuWzPSTgQ6rwVTV1Nxf63AGiHMqmm437woKK7gsHAeVj6qrCLrVjKKcfXmjShuoyWJR",
  "key19": "qbQTQ8Z6tq21TUavVY3LCJ1J4hYEYnsuz312hSTjSZjFrXAZ4mDtui988ecjnw76HfxRBxdLR2RV86YrmHSHPxW",
  "key20": "4FncXJNfzHavFQhQeDVchdesjpU1oaFWAKLwN5dNBh2R9NVz2FswK2wxASKTdh2kfRDPJA4goFJ3HfHAeQXFDXg1",
  "key21": "4Xdj2wA54ks4XgBPhf4hjyf6gYw2yNNrhJsj1nbQ4Wntrbtcr5bkCt8gBHQFdk8DnT1C9ELpAJCkFt8hSWfasdnF",
  "key22": "Fg94zz1D71xcSteLudzND2n8t6DKurEFUxBGrgAPemyjBLVex6qgnrUm7Quc47pv4Z612H3G96bjTZShmCFe44w",
  "key23": "2Kza1Np9j9B3xVqD3c5shmo6SwPMoPDoyPw8m1KKPps2FhmiMkk2RUB8kE4zsN5bNDh1kkZrQZAdcEkWfbrxv2ei",
  "key24": "5M9m43tznQj4RT66himBrv2NLsFxajfVbRHYsfv9FdMoGhYioPrWg66WFiiwDTrw7zk9KtoA82gps5kdFxXdYr11"
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
