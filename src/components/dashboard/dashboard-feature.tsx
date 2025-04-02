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
    "45a8Gp2Hqr77jgmCoiV9rppAAv8DBtsiw65wuaJkgH24bBUHBEiwZJfJhLKoe9a63Wa8Z4boEyup7YJa8DMVibnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMk24avBm9oqnm6PVAxn4fAiSLf6XKkRSvgwrTUfQ4QGqNEbeAvoscDt5puY9PnhKFrLNTJBLMWZB1EM2qrpTAJ",
  "key1": "CM9zT58F6kS7mTH3c8xFXUbQKYzJFtVCLyKBP1KuN12TGc7om1m8T2ovy1svykmajzQtYfmPZA2BC6t1rUqeoTe",
  "key2": "4GdcMHgzoY1x7qtVhKroStbHHr6iizjoGDPgDwKvXJSm1wSfvamT8t3VqEVmwroXe6GwrgX3BAcPWDqgz4Zx7hwu",
  "key3": "3u4Mxzuxcmz3ZfDd94uBpcRUAMDgsVnoncirDFNyS4EsFeueiHxQX4tFaHofineJKQGwKtfRhTyvhg4jUnSUeSmM",
  "key4": "5x5kDC9CkdHM16vaki5a1Lz5xQ6rYFFdFMqeQ9obc3ywoepwpf1mLUM9EPj1jf6obaovDP25YG2GyjEeJZAbxPvw",
  "key5": "5bNufhf54Guc2rJYiWztmGPXCjvJ5THF2cpZQXRoHaVmKTvZhMU3xXcNCtSTn6MsmCMFBcNDcfpD8erEwRfqc2yv",
  "key6": "536Fk2AscPXjPG8J26GCs63C8woFNrK9wpxP5eQBF25b4PbvMDMj5jZN76EdMrBwoWhAiJUuPqkvx939baX5sRtN",
  "key7": "G2D7FXHfLpSatPo7vbdWn9THyU2ekHRCvATokp65uGv28dwQmLPRoSFbYPXQouQVgaqQSBJb2eZxv37daRv8Hza",
  "key8": "29PaYP5qemqak17T2rZCJMYAFyN6NTrMRVxWiRERLsyhjBJ8h6FjGHrhnYQPbKJLryz2zzRhZnPBE2SWdpsWtBVi",
  "key9": "54aQSAsjmwtdXStbCgtoEBYtoECyu5PWYgwoRtcKLjfddhc2PPmXZ8EuyMHJtzaYnz8xk5xzR8DbxNqVi4nWW1cK",
  "key10": "53CvzABYiAnJHK81xnrSYzrGEjyXGefCPNhWtscD4RHuFpd2XWn92PBw219j4LqtGAZ6fSxuAs73GFSADtbHoshe",
  "key11": "Yxq8egHXnzS16imgCfp8TLZJ2w7ogFew6e4efnaayDQXAyF2JAgcTUezsha4Kxt5rs47DUDFaUK99n6R78yzNrg",
  "key12": "5vdmWHY2tbLhZU1a9FV13hRekcV2GZ9pMDpj255r5gJf8ekrg3FZDUbVYJvvRC24FsqXKeaA3mncL6J4LZ5mgcJK",
  "key13": "3PR1dFSxr7Ku9Eo2PJK49Nwv22VRZvsAGw9RdnB4qqQmknKWrs1KX7xDiFLh7erQFE4EfU5KMjJrJdZT31DhkqF3",
  "key14": "4X9R99Qyi8G3vaHuwU67dWEeULoJdQRCMTRH217cnexqmQpDEUUzn7xnWuioTGb5qLC85kWMm855eresToxaE55A",
  "key15": "2rXL52u6mRJHSbXydgUaZZpyjKprKHuUXLsyztRpU7Q7XaXJ8nCebt1Dm1AoCz2uFCHCwVRdsjUE3fxq3zs1jpBW",
  "key16": "2zy5oDv2iYTpBCt1zYiFpq54nU8CzBW1z89KraEYe42Zkaqb3pky7oBeupypWzaRJ4X77EWB9h7gokyTyASoziaN",
  "key17": "3UXfWBsE7XTkXsFrvv8dSJS3Z8Xe9CPmKbVGQ9qKecpNTYgJkbjgL9Fcz4gTU5rUX1onp98xFSWtnBHDRTJZpCch",
  "key18": "328VmP9hAan5eyV2spqxa92muZdUWwmNCf5Kt56gMjTfhx9UpW7z4HzijphBmMyHUfyanJzkwjRugLWWkDKb6WZN",
  "key19": "5yd3kMwyBxMWpVVqXMdwiKRMZntmYXKg6PTRjMW1UewJPJr6kzAqHwoT2mVYW891hNvfcDjQEkoJuFzu7MZiqsVW",
  "key20": "jAAhWYkprEA88izbmZgtXn3vJdT1XizAQfu1qtHQVVQgaJce7GR2XH2SSruejdarVFbKbjc3sBRckadybKkmfgN",
  "key21": "4KBCdkA17vNyH37r5z84Udrbghja49GWPB6S5Diq42yEjSi8DgFjKik48mVbdYTK7aN7Ywq2dFAAoR976G6dMnKa",
  "key22": "2MaDxW8nFRraEufXrejZpnj8xod5HfkPctzNYJhNHyb1DkeDbZsAyhouTGDiZpYddzUmY4PbLRy4PBJeNoi5xNnz",
  "key23": "3PKv9wwXQxzaPuX5FdH1PevaPA1uxtwQbsG9s4pEdga3sBMQ2Nmgr8GMsB2kN9xnopFkzv296jhyqnbCmeXp2BGh",
  "key24": "BJEL1iBipVqy72sDkFvUpG7juW182vksCDNjhfTQu6UtrgW6tMzi8bnmFYX1iKm5r2Qz4vHT7fytGVd9Rb7NmbZ"
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
