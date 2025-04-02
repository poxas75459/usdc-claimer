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
    "5SzvtyHWeQHmnoetrnjk2bUVBk5Ecj5ssmDCKt3b8xqx4rZqABvjiEwbzJCijGWKgEDmszQ2MERv5LZrnk6uoJwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2omvsiRVXkEMuqw4dXWya1A7YLTfNBK8t99A1LdorMC34sswWKMPp1iXvSa48beECi24PSMwxW56iEdEM98eYJTe",
  "key1": "4WbviLMdpWuhvpdrUM6txkEzqjHEVE5eXeQxyB6jpuTeoGWxrski48NJD62E6GAVaLzT281KFKB6jwUbKA3fDEGr",
  "key2": "334AymGjCASFEXdbq263FPnqjdEFEVEDW2nE6kgFiQdGU4vjbyvP7YKi61vGvpEXue6Czs7XjrsDL84u3mGnDE1U",
  "key3": "2MwyLztVKhwCFXqNg3yqhmXFgNjY6hx2GuKGKJPiyuyNXduwxRmbrX11PcpFy3EBj7vVu1JhhRW2onfnjYptwkFy",
  "key4": "5qKyKinaUyk8qJki4as2EQiUgaQfXz339xjivEABkpcuS6zdECcy4E3AkDgR7QgD7Ytrn1RUfFqsrdsHMXATPjiY",
  "key5": "3EQGnF5XfwxSjfbwwMwV8dHdiHdc11Cx7qESNBhbc4oiyRpEofgShfuxEwAdaCJLPR7A6P4hgoZLhGf6zSyPFvUa",
  "key6": "4xhWobnmBqyjpdx7LbU7ccN2qnBvREvJZrZQh7MhLNTbDYSA8hfsiLGAQj2cvkELJugVocGGPRUZ11ztrhLjKChQ",
  "key7": "Qcj4nDBnrCaJ3t42TjgiVwKhTgXzpaiupPeLh9hFneFxrr2cC7UtxAKuz7KYKPHC2qPHpuecdVGhefTDKTUPGrm",
  "key8": "2ao7enYwvrKTwZFRhUTptCgbRNa1Jh2mwKSrtUimfR4LkTn9Hjgf4qRHWuJFJjHhH7UUr72c95rhiix6fYRcEUwN",
  "key9": "5zfZvp9RdGpivDJHSXswEJh9CAbJLBAoRZyrFY8jmNd2EzhQWZsKBNjsquJNZtrk3mNJzAk59ipD2hfTgh71hYZF",
  "key10": "5wsXBCCeTBaGiUVpDvaZkM74VhPDxoDsXTpXuwrUE4BQYPmReeQGWmXdhJ8aGedcVTAUsgGnBWvpJ47ENTzUrdPv",
  "key11": "36BDvuFJo2Sb78sHV2tUt7yotoBr6xLy94EyukcR8SJp5KALXEyopuPycZprWfufoSsYCtSt1j58Y9hYKgYH2smo",
  "key12": "37aYTRxxc7SNx9ftNiJWufUvqBD7wbUhtzKUdCAUJz1MDx1thQwHJMHHrLfRhbBtVbJns5x5hV2f1w8VY8vxw7g3",
  "key13": "3913XiRcoyr8s47BJhQXmHSS1s3DRPNKHCaBubcQqdwn97x3yJS8T6ErEux1LDPHReGcBGUNdXKaQaD9sHMDQViH",
  "key14": "38mVAQsnwF7xdSHMAo58Zz5557QC2i1gxrK3BdqEcuVpdjQs91HL6wGVwnbpNQYQiqqnf5xJQV8dVzEAGzdbL53j",
  "key15": "AiKRGQFLjz3Qco4YSTN8EgDSZbg1FJJ59bgPU6pdUNVtm8RLyxcaLomJvB1Rp3sQZH4cwWjiwcttwYshqHhefVo",
  "key16": "3rj6xYEqD6MqzBZVjb8RrYCbJqW7F3cCCqXExtjfAJ9HhLMkeAwvmbFXhg7qpN5674kqy64L6oHTu6NAwE2kteww",
  "key17": "56QAGER7cou4JkFYrr1GqbQpsPUcRMCqveguZfzNKYvmBcjTUhvJxX74dTqU46qw3tFMi8nKrCakp1EeMXetGApA",
  "key18": "3x1bseAoHASAfaYCEPLFvPotfcGDSpPDgG7v7Nxt4aqdJBEF7w3mNzBe7qfWugZGBEnDo3VkJNWohE37bpCofW87",
  "key19": "2Jow2GVC2cKWb8H9VW8NzAZNNuzmafNhjCsnYwY1UMJawVeNWRnt1ff1Z3ZmfH8itECz1c8pYUFTn13Yf7u8mmn4",
  "key20": "5fAig7dQYUFAiaJgoy48b5f1Ra5J6jivTVrZpVL11ziRvEZB833yBkRK1t2xoRKs8FeaLRNPdxnSXk4hKMvvm9wH",
  "key21": "2nyzwabtbJxGTVEFc99GPcLsYP6KjuPed1Tfn8tiQyKEkqNeZhVoZbRxv6MFhLeQZmFk4x6PzfxAhSAsBzSrawMD",
  "key22": "4BusoyVekALm5e32LpggZ69KH5rvX6TNR8nqrm72AtPtN2dtuXoSaiy4eX2os7WPMygZtoh88cmecfatGktUzpZW",
  "key23": "5r98Nb21JQYDYJeuP8Bf3bZURUYJc6QMwqFobnuQmDT6VjqKqPwmMsX9pUR5Ny9LENbHaH9NabU1vPyJwpmWGRhK",
  "key24": "2xaiafpqqZdVzXGUxnPFzSmg3yRFDiQat2tHLohLpfF2DQbfqmMKhEzK3ojXRM7yXD98yNYWseJdzQuEikBXusYd",
  "key25": "ayP98vtaSCURQpKHVubiScsfeQipLZfN4rfHBCWEtLor8xRsrEP5uR4DSWjkFqz2AZGJspcDoNZwD4P6u2VA8HL",
  "key26": "4BpfKpTv192UpLAu8vBWrNWj8HQCH3U9HmWXXc4CsC3MrJ1CKxUMGh1fZD9ojbskkmjab7YWhsZeTc1HbLNdmyt8"
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
