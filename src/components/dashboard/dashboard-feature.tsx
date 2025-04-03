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
    "4KrJ5jr2ytk254Ft6AfNSKiht3tYrt6Y8xBsaCbyL7vr5xa3aoa56g4mutbSbL9QykSkJDcjtaHu8oVtKG2NiuXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xz9zc4Ck6jX4Hv36pnY2NyVnUdFmoaCZCsqqWzwzKChkAmwmZzsUHgi34kuQayNanFeaky8iafoeD9sexzTh5bG",
  "key1": "4e9uDvk1ECqhZUFycSN6QFsrsszydoTbs9ZF6y9LYdZasX4PkkLQo7bDJWbgGx3yVUueGkZEwqfnV8vdqBBJntXY",
  "key2": "ASWiDPwF22r6hSqBHzJMRdtj9MkH7Hjk4TqMonMwovrpnFc9RPVxMw6cxjp374cNof2o8oZuyQbFtMbf7tSvFEv",
  "key3": "3bdC27nNVVMrfF8BgaKPCwqBDA4VjrHtxoTxiz7jARdfmR7ZqZpUi3F8W5hvs6E4kecAuHxg96S51suLEx53EmBr",
  "key4": "4snPFRgVc9xipdSuBsHyuJoek64bLPNSNrRv78nU6H1L9JSKvdv4WaRsykzfT9eB2AWEWPKbX73ioLD8jSAj28vP",
  "key5": "5tDVaiDTKJ1ZS1vdwKw1a2JAKnKYQZdCc3mmByY2jtmThxda7ZquuZKn4heNvweakiXgr1rZgk2PYrfyYnL39N2B",
  "key6": "66Vgwd7k5FbXcRUivV9KY4D3gexEd9c2xwVnZ5MRHdLfBqWpQSQwc19QEd3bT8oGZBa7GEs6pLimgNjAji7uQeFm",
  "key7": "NefZ2paJcT7HFStCjBi31BhmwXsgCxrFYYBKT9zsc6tNBy15uesLWw9AggZrQXakLQQHEUAy8oPiahh2HJx1ovS",
  "key8": "2i5ZAtmF9K9hCeXr5QmXdu1mhTG8xPddPv1dcmSGeHFXvcD1e1xwJdbj8RUCWKHm6AraTuJGxtEaXwopFy8pqrWT",
  "key9": "2StrpnuF7yE78eUXs1WgkZQpnycd7vUnJ6uQ5eNfMd63BRfPDzvNjRCzg7W2DBBtYVZf63Jyyem9pfMYDUjJJwwS",
  "key10": "4dTqvWAAzwQKYxjsWiQ15kCPnEJuPYQEmhmsNjbLfQhTvRjsxgt9egCzVRydaNarVPbbgs6Pmkeqf1P7b13Fr4G4",
  "key11": "3t5HWBZYzN8c6T3vrmcPoBbzwey5USp4HhsaSVn3FJatuDCsYWzJ1GHXB8TXUsFS7eRofZs1fSq7wtxYyDce5dpw",
  "key12": "Ggs6T2wBFo7vqU8iBWysDXDsBG1K3WG4KacQVED4LcrQ4P5PsguzckBXie1dg77MLME7pPBrtttHMauHLabJ3yX",
  "key13": "2kRuy5sPx2BNggpvRwCsU7FXDe71GMRzQDcTtyiLSaNwrQB7PufM19z8k7LS5fHe18unkufG61CzNn1TLQyP7miB",
  "key14": "5asDaaxSFLFmfcuyRbY7SsVVpLCotmCjHPAU1dWSPfxoUtsbujLdSRgGyXvoQsKWdVS4tnv739rf3jitD4QKn799",
  "key15": "tCqqRTxt3iJZid5mekyuA79jnu7c9DhUnDwDSe6FoXBTGrfhWEyWns9sf6nWtH8grfqfyyzphLvNj6jzBHbrrCm",
  "key16": "61fP6trapS1iw927XewWQ38sjbwv3jjgy9B2meLCfYwp3gHdiDsqnmjgeJh199r5izAjETj6rqsP8zkKkGLASUkx",
  "key17": "2hSEFXMDSC9GywkkhKiGCQYLFscrwcZMcN8dTi1HRyro62SCSFQg5fqfpbEkU3Dz4xXYhxcbzx3Hd76EYYr3nySc",
  "key18": "48V2ykZtibRgAv7PsQnMAMQtzHt3cjbUjcSDZy6xn6W172oxMRsanJzdNvm9mAJBxq5d7w3YnCgPs6NVxvmnHkeX",
  "key19": "4J8rgpGzEop4WGNTeWvG9XKS68GcGruZ98HcDZ81HDFnXYuEahGwE9oa6XWurT15HrxuWeHD9iXL8Ve3aKRFB39v",
  "key20": "2f2ne7Lr8AUZxyhSf1jNnMLV8ifkb9MDSoUZNfCFRg8yBTzexscJotiB7ogY2Y4GtLf8E3T9aApEwCSdU4YizBHo",
  "key21": "2GgsruUpJ2X1nxpj3sRukkoKqqn6azwLkcDK2LGFpnfyEWoCS8bP25HDFCr78ZwMvjgT1U8gE5Mt7KtcPURaz5yu",
  "key22": "4cVd8EyrAms3B6gukuqzeUsLz6JiFuoHicbWvmWgq6tt5r7UgpW2Y9DCVKi6MbYUNpCbjZYd36Y55xxTemkHtAto",
  "key23": "5FJoNY2Uh76MugLL2B9Ar5QCfNfe2ZLVFRQERahGTx4LvD36kCGy6mwSNbrDt9MJ9XeobTJB4pcuM3Rv7deD9t52",
  "key24": "2bWyF1iACUWg6a6vxUcaTfWTsgfCp67rhmhsUgvjfWpgcgJJ31GBYGexszgQHAEydvoUEXJzGN4aL4Hk2e9tPSyg",
  "key25": "nqX9Kntth91gf6dEqPaRa9PSiMc6DEkm7JcXXpZDtFUbRyGJj8PfCfCDH5Z2kmboT8RHv5So9V1Q6PBVgwRT4ss"
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
