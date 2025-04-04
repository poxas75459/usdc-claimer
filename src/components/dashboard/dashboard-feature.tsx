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
    "67qRakx1U6EsQosbuarwhw2Lk73a7cDj5rZfEf84eLKs94ekZZciYnFF7m2K6s3g8qgpY79JnQGaXWtSc1NB8NDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545cvZVwmDSazfK12cY4hd6tCeQwaASSbtH94cXczUw8xQFP9xCcodB33Y23Za9sGYr2NHv1rCBTj6ubQxCYoKbr",
  "key1": "dnWNcxuavJrF7fva15XSZbtrqPW1qReQaLEo3N5JvE1y2wqD55LgrQz5bbTedfSyDTYzNuzDDrbXbPNvxVTxP44",
  "key2": "4r3iEpZVsUNckK3jXX2juAuHHLYfmuJs7f241ruSdUZmxN7qqj27TbzVKzFqkjqZnFVk8gDLKfHtvSPh9oBnMWCY",
  "key3": "xA1dQk1WarGAp4VhSDx3Dzoj7KuEd2FTZ7YfvtiKTuETgqonXnShrvsYvgAWswPMhB37sQmYiFzz71QneqCoWGZ",
  "key4": "4SS3rZuBn8DhqxDpafNcpgb1poiPZpAP2YJyfyyxPuRfXW1YQgwQycsoge1tW2k4yhmaKmn3DyEcb8gvD8KECgh6",
  "key5": "5vfqC7vqTHejpXYUB1Xo3NQjbmkkhotkmQh9KrYrno8zDrhnjv1J2QAjghsivhM36DwpWfngE6F4y19QTfABN1nA",
  "key6": "66p1jYY5X11dJSPxHajs1EWaTiJX58FwsDTkWaV6bquimpaqAnEyupPuSeJwgho2og8StaAUWx5osgfejivJ589A",
  "key7": "213HWwH7wpRiQmbQkZ9NMncxrPNindvMFU3gBSFnnQWA2n7LB3AYGB62pJ5to2gurGnLmhSMt8DaEvANhi51z3HA",
  "key8": "5PdDsqj6yB3eJU65FssC8Nw3vpiGyf2mnomvYinsh5JTmDdPqsJ39v2vZviCWj64sAjXKzwr4H63QMxf1VSydh3n",
  "key9": "3BQ8tRZY3YfC3oLY4GFLEK1ugjPuT3k8ZhjV5WjWwnN2UfJEYYM7TD5jQcRXGyYzW9BRpwD4LTrgFW3jvLeGZsL4",
  "key10": "5xPnbSgBv2wZZHrGyDwFbCcyVPe19NeZgosueridMw7j43csoVKYtYfLAKaqynC2wPYvFkckqMmmMAgBQuL5r2qL",
  "key11": "5TLv3oxiJqBS4bAMyDYj7JMBYxpmTok2TC95EGjkQ1KyrdVZSYoYsHN7azGyNvaLuhPFsMDntX2rpjMADgZVdvb1",
  "key12": "2JTxot6wp7fX9KHzpa5nyPUXVgPFtnpvcKfyERGdTZohXZqX9QWV5zYD7cfLzkrPrb6xMp5q9Kw5ToB6EpHXgqdS",
  "key13": "2KuQsUgX2hivwAFh4gNpqDLcL3tPXrPBwxUeRS6XvxTgYNnmgSo7NrMNMZ4Aoka1Qxz94VegiRqQpZTWHUMBSFYF",
  "key14": "5FHAenXyaWCq6gSf37WUfWCdJh8dSAgcf9t7QwmPrfDFbPq62hX9brEdevsudiTjWgV55P8sYxRNWMaVaVjDWUpD",
  "key15": "5Nxpn2bnVUfYzYQsTFniE8LqKyuDkTn1TdAprYo7Rt2v5GpXaLQdQZ9vvVrhzk95Q3Y7CRibk9SrSLsT9A9rBW8M",
  "key16": "2NENdp2M3hWTZ6jeHs8PjNGiNCoWoxVgroQZabkt8E57852HtcjxyJxW3SCPGmxxE9WrFdiSgDdbY8XaYKKhHazz",
  "key17": "2kuKipj6gp8zcj5pMkhEpFGykyp8NopPDDFQBjqVagfqhXHF22A5K2hweFPevJrdEHnJi8Rp9JTw5ncVbgDkZ7eS",
  "key18": "64y32wK8VFQ1RnhGdvFxSnPKXHuEimTRvfiAtAXenieqXuay5rdKHnVHWAPo84CbXJpSCZ6PsVpsuDakVc92U9Y6",
  "key19": "4AtfvioXFXREQqc2AwMG4ei8UY4GQ2UquqVKa3bcZ794JYcsCP6emwX4Mm3r4SrozwAhhWPfhkSdsb713Va8Sxkp",
  "key20": "3vkHF8QfnbQJirhhW5pVRtfWHC4Rhw6xfJdpvEWCmikbxKCkt9UiL5RJCzKqt7h8BtQBBYFDexf2PxmRSyJxkX6c",
  "key21": "3GDRbUBLWTdQojoeUMW5Qu6j8aPuuXheLoGCpmy116AcbKXSkhw4yAxSqrsYhXrJgRkxwLe5AbcT7sjv2ui2T1jg",
  "key22": "nUvYGK74KKF1z6XWdb9oZDwYipPdzWN4BrovSwi2HakotMwqfHrh6r9bwXqk7AAUn91A6ACaBmymo8wf5D2DG3S",
  "key23": "5rLGjMgWvq2fCe2jejmhVt8FcdSAr92FoaCjNK16JcHq5KhKVfTbYUomRJtKKBkzDbEiFn7e7mPnepvGimePQ3kQ",
  "key24": "4qUQXeMsqPPpU1e5EGTHuNoFn4sLMyhzCiC4QYmp8eFwz4uyWYJCQKEPnB7rtJcuHEwYVnz5qwu6MYtCiH73QBQa",
  "key25": "2wtVHepkwNqUtFZHntfKUg83kCd97wAMeQgaQRUZYC2YuQE2JF7QEaZnUDFTruGWpp1XYgtEc8dn3iAcUFczc9MD",
  "key26": "2titpTDzVXxa6t3GQWFZwp7NctnpToQ3qexwKzjC84KM39vqN2394PYaGpkKPdUJ56cMyeBzbgS37YcCHWXPWwky",
  "key27": "4Z2qyc1VFHNgB4ue82g5NHcKXQzCQuMwURdbq4r9pKYseMt5ogTAkurkFd6BfKYo9ZcZ4TYGZ4aUE23C74tepYX4",
  "key28": "4f9TQ25XuG2FCTpcU8GqHk6jZS3NkK1KtEj3Sm5hkDxLf2TW9WGbe1Txn8mNXLZkjJJuCmR8Ywqwg85H5wdC5sfN",
  "key29": "5G6RXZrH3jjARNtse47W3S5HKNNkLishQRAoNoQAFYJFHLSAaM3Hw7pL3H6AVCnP721x2FTZWFkFxdaQ6kxEEq41",
  "key30": "UCKTucLS9u1sxp5NeuerzysRXSAodW55TbeTyWWCpwVbWpn2rmQusyfDoRuv8TFg4sGyd59zQuocekb4TsgXSUT"
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
