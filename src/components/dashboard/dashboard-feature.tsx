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
    "2bmbzP4aFfLujP5K84fQD4mRDuEnrY69eFx2EymkLPpCNMaByEsFaGKiALFyLVdhfUuwhQXA4LuCq6R9ZptAepgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8LtMDYDB27yAc3LgXpidHmVe5YXs3B7jHsvaYn4csUY4JJo8EJwvj3kd1XoYXPuu6ifF2jdAYW2A8Zph16WDU4",
  "key1": "BBUVTqBhHLYFWtH4E8MnaZr3BQJB5b9SWe4xP4kuKBhU5YJEzEMnU3sCzB2YerR2W49i6mLM8m2Z7VPgHZEz526",
  "key2": "29aJgnbPQyP3dq8z43efM2ifWUMrQcnm1xmW14T9kSfEbApe4sAKWx9X3FTuwYia2XQaKTvQSyvanGriUycNhthU",
  "key3": "25Qz6oRNLGibk4qUAFxoCRny9VUpQK6zqLckyKrhv1UZAy3X9LPNMpfXEb879ComH2jvE77AJ953PzDq6KB6A935",
  "key4": "4ngkG9a6FqKrUt4FFc4JKwJznX5S6BaHSKp55Q3NQgptuP5AurFXw2NKWraHekthEtBNzn3EAdGT5MmY9ZX79rFR",
  "key5": "2FbwaZ7YTfy7E4Yo9rT878ZbpEkNZCpDZrpkJ2i9zfqgyx4iZwXSeXhCvhLgWLdceoDCxPM85EM3xfxEe71hh3on",
  "key6": "4s3SevsUGB2YyaEeXwg5WHJuhPaemiYnjSzqPLHK1N2EkmU6nSgpkvBwzE1UHfeaW4MUFe5G4vvLkJmMwzraSFyj",
  "key7": "4WfFcqiWVziZ8tQVSxBN6x7Zbaq4WW6v6VEoH8xfS2PXeYorqkUxRNBURweXESUTQJuTi1ANnNs5R2jygGZaJeU6",
  "key8": "2hmWafBB1esNrMNtpnt19XpLmsTJR78uz9zyLQ56VBNPRwavJS4bZYewELu9N3mZEAES7DHk1e8PfDzsBea34KB2",
  "key9": "b4GVX3aYBbD7XSvkksnWocHST4XBoLc9LeL8YHEYRVmUL9tAcSgBEsjCctnX3UCtAvF4GEM8C5XCiqPiHewrjnF",
  "key10": "4gHFHKpMCdM8w4kDqnSuHeirrBooZVk2348BDMMucLfX6tHqNgojpXrm1brEKWHhHQmVVjvERNafVk9kxsrZQbpd",
  "key11": "6Zqj7jkwqJGqN7gnRYEfgjG4BpN98gvNKSsnfyEHjiAoyrxqHMwbymj35TeFpy7KLYGVbTyZePWTAbrq8X8k2ZB",
  "key12": "3Px6oK1iSi7JrmLhmsUXybFkDMWvmCJ4HvYCFxLxZDr3Jmc1qJHZcWCAzdFKhER3F2oDnzv2w8Qop1mUfPfKxonF",
  "key13": "5kkxMjNtFzSs4MRfC9vYFz5J7tRs7Ez4giwXnV6cTr7jGdyiCiDr1GbMB5ghiM19D7tzyG7gHSus8Gi83KUZAk2Z",
  "key14": "NNifbAuA8TBxzwrySiFFmKSDgNspR6uFhXuKHTXSHAF1tHqMXiW6umcw1k7EMRXxhQ2CYDx5m77xpyRpcNn6Mbv",
  "key15": "2Lryb7z3o56y2AxzQBq5ZxNr6zf1KTkmr6R5YoNbUfWKMMnHmtkZxiSe6VBJCq5dBapydufYdQ5UFhDQASoUqhR9",
  "key16": "AKxw3rXdDoAKzJ4xn6CUHZZMLqjVDQL9K4tLhAy4fSqprDMZsRCEEsawSqQFi8Vf8GaqVHb34L4CKHV4cphtxHZ",
  "key17": "5v3nJCygMop85A4P8sLP4w9DAAgym45YNsjy82YsjUQ4YmqC2uEAzR559sx8pz47wns5SczQRDb1JhAMYoduUo9b",
  "key18": "keY7ZLQEMantazV1K6yyTJXCkd6Vs2nXdSkjJX7ZTNkD28XELiSyMMMkQL54ozEip7svSUVPe9oBWUqqomVky7m",
  "key19": "eFrjiwTTVK1ztPkmdHxvEhAz6Cb8RaKnKU5xPVCHCkLiLfsyGeFuVUgs46YRXz2NLXj2Vx8qAm3yhRGYDV4t3uL",
  "key20": "3dgXfPttY5CyA367EjbEcCN6WHbSFATYum2MBKvDFYkD4MCH48nVXS9TwqRzAg9UuwYpwQ9ZRJh6Qzm3tXnvpPLq",
  "key21": "4erpTKppeoQ3L9eyko3jGLHZFjrPhEQYoRiotMBV9VcoaNm2b3gNyzfqq2uCUTRkURAeZ8mwLsJ9UF3BzoTnLFLS",
  "key22": "3La2usQDGY89vsExFAod8bqLJwnCow7fb6VjSRpHqrFKLukwppNqNDYvMkTdQSVBJeDqZTRMaqQvnHRAitmZ8pa3",
  "key23": "sQqCg2srcVCSuf32Dkz9rV3Hdkkyk9mPKTKa8iMC6aYWGgVMzfz7ZLZvfQTdHVU4RDVZqY8VynV8HMGX7GQdpLF",
  "key24": "2Uap467XUExmcUh7e8exiCvPuanCcVEb4Z4zXXgU4WGmuy63kCkpedEi5xqFamptUGh1fnkiQKYJe6HdnLjtSUJd",
  "key25": "UGpb6fwWLNzjn2xNmR53bvsCfSUvMTQ8TucaudD5uWMcfPoTuj6jmmWwnWnzEEjQQh8MoUJniia9aHvEhHcWsiF",
  "key26": "35SF73tg9DsskevHfLLCs1TvYVYqz5sSDRyqTZhHB3s8f7zSSGGN83nvwVbN8cfJyHHbNunwBD9XwnSNMBgis1KN",
  "key27": "5zYKencwpfBnsbCNyNgBXVcgmLM92YMo1UTiJ5MZorGQwMehvvMzeEg2rggcPkHfPwSDDcYxX2UL4URqA2sQxbki"
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
