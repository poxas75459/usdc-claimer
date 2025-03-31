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
    "3cKio32JbQL2btAUNS6vDvCWMp8U3CV2EasDDF9uwwnYLXe495mHJpDpdqKQvzqDmnmUG98r3ZiiN5Tph95ztoyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bp8otdWPTEN5jEfCFWpPSiSe7tWcX462DBjdHiWJ7FfvjsTK6fEbeenGuNnqSeaStjriAhQAVhxmEC2aQzLoJSh",
  "key1": "4ewR27fYbhcv9PUNxSeXvsdm57LzfmgSBNaXJTmVBBVBXuSePgiZcw7dvmVp5C642ZnPfFPNzq9tQoG4BvjcD6vM",
  "key2": "5jwGu6pqAxDTvasnHT6sj4Hf95FEMYUYX2fktsmNT8W3Wx6pjW1Eu1TZFoRpy5oY1roxTLGW95QGxqR5oirHhetV",
  "key3": "4Npnzq8cXiT1waVRDRpvFo6zZijtdqHR6rkqhQ37pLyjZuGu4Hryztn84ym4p25wdFTaZaa6G652JGrWgcK1T9v2",
  "key4": "35ADrErTSAU3kEWQ1h6M2X69HCYBQoVgZvvPFAn8f8dPnaQ2NnqkdBiy5CXzLVbSMtCMxdBo4JdhnreNQsq5jQTi",
  "key5": "4kpATYQatdxmcwn7aFVqKLorXBDNu4hqVsAzZ9pZdqUhfKLELs1BYHzEzdWpQyS2U73Hd9rsPBDetJU4Aja1uctZ",
  "key6": "4Z7F9BjVwGNapSYQJwvtYJxALjFSxvWm2GzJNivotKQC54bmQVnkt7cC2aJr6D8UFozs3JPG4mPQzygsSStxeBoZ",
  "key7": "2TsDUVeX6TMy4ZVGnkuajWLpzBZzKB9uexxVbK642JAP9R8E41x9gSAkeDtQ4WVBX19wQ4rYNrtjirbsgGg12bBj",
  "key8": "4VDisodZyKAgHCuipibBxxWGTL1tu9re4tDBzeRf3s4Rk57DV8r1oYSf12dtmvV6s3pQdyAfsaWVkxk4s4tTCEQ1",
  "key9": "3fi7Az1XXQbuyeKK7VpN16zjTtpf2dyXpQvK1qCXdRUZk21ppYkzzxLM447tDxYiLweJcxk6xmmHpDZQDje5rU96",
  "key10": "5HipBDGY4Rnu3jZVLjppJ8NHimqxQQcip2CSGetfFVeQx1rvFZBhEhp7LvNWRF9NJwEBL26GzL4hrtuuEudC6t94",
  "key11": "3RuthujzfFpTG4airwURhDXFQDJvCSC6RhMvWTJQTBuLNSHR157m6MVCsVaQ622Tpco9m8krTVnSbNeRhBEqhb23",
  "key12": "5Laazjo5zoszyvkEYqP7fvunfZdHsedC3NYZ3jCheuzforWEMcAQ9UMUsgWtXnY4PDoxZQFNyvgV4qdXwaKKtwec",
  "key13": "4c8UVvfGSRedQZKYtqYMoDUG53AmK6LFa7MXarBUq4ic82sFdb3dx78cHcGgQnTB9hNjrfw6rdcWNAqJFLLTaxLL",
  "key14": "4rr5ivPfpZKkBbyz1R5h2G7imzs7axS2P1paZdzjfNgoZ4junxeFE3zxbD25qmScpUZGpj4oYdgc8ajEMGj2VBYQ",
  "key15": "2KtZxET6e5szbT3MFXYBjqAL3UNP93Angr7TKCWF9eX7cpADzxCQgSuGuELknuq7kxVbkviLQSi2ttECGFzcuMG2",
  "key16": "4kCRBhDmTvxTsdCHVFhUdgS7iTspXAih1d8eGWpToiviDBHLEWEcaLtFEMcAVUWAi2NPa7jEk6FyEBLrQawxUxXN",
  "key17": "28JxWT6bh7kZnwQ9WE41tSsy7y9kGjH9tgJTCqiSH18x3bU1is8Pb8RyM1SFn4Hpqf7Rz6eaZsJUSpHmEqujvGnE",
  "key18": "2vrCZvm1ZRmwc3SGV193QdyLmVkr2ewAHBnpX6AboeM3qjvecwoEa4X5mjtgJdR64k2rGDA2u6JohneB9S5KDywV",
  "key19": "38hyqosyXu3wcE6MsAj1frERM5KaqyypxGmykBwaS2ByZ4b2XaBSPgeJ1TkqcSCHbQVxppJUR5VXbhnhWfr1WMHU",
  "key20": "4fxz4H6YkC9afEmuuGTw7oPEC8JqaxL6MKxbHfogBvkjZDQ5k4qL4GSeSDFqV2uTrxAeLo95hZGsSLsg1L43Wemb",
  "key21": "4VQbKHHsSVjP69dD3FXGuueDzzNdAstRtzYt1iL9YS9TgJQAc31mj1U4oFXab5ojf2bajPsEXDiRHpcYXnzQMoZX",
  "key22": "4QUxP4hj4VRhQbvvx5gau53q3zfjV1Q2iBybSMEMWAZ5dWsTCQUq12734ueQ1iFz81brpKMLwGXdGS44MaxREvk",
  "key23": "4SrA4e414qeWhYMki68YgmaQVFMAzW1gLQM748jDfsJxvEcicpFyLkoopYqjwT7q9jeHWeuPAWhiHF1Svh3aeNDh",
  "key24": "5cx4ezXP4U2vuHCafSodG936sqW3cuXZfPyzWwSSwsrxtWgkJgTLAqHSxLqrhD6raSU1VXzcZTikJoB2VY5g8h17"
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
