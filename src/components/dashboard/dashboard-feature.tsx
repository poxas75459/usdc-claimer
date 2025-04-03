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
    "jbdpWQCpC5f5Mff95o9ZJS7gQz932eyjhAoFcAxq82vUMRiFthoD8fxqG7vsWMdN21ps5WZLEWSFqChj11owsfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57t14mtSqkLhoWYw3TYVMQ9KcfSDVV3fqQVUgvC1j7pRgKpNrM2vyYdaWv7qM5QETjnvQ6GsUHTAPSx1mowZBCR6",
  "key1": "3VrtzTqszBAA77khzSRaZnNMETsQN9cDGFCoDLqDUNyX1Mv5u7K82dEvbA1bJHUeggeGt3aQNbX1yGg8x4jbxTeN",
  "key2": "4DTZ7KhxjYRZVS4nCp2121zjaLG2Xva6yPcEEMDN996BEqk74rkR25n3rAhMzKPnM9qjqJpJThoqcL4najKNqizb",
  "key3": "waj6ZzQpUhUDCSNp7ZPKPEqYK8assURv3jwaduTVCHorKwSodXfVfCuV2gMnUL9xyaHSQQsoi81fThkGeU9CR8s",
  "key4": "4iagFub214agnyZrtVvLNKiJ3kSEgBSjrBfNN3tU7BH33tCrxuFaNXmh7qJNjxY2uK8xtp86qsbHcu3mwd1HPVbH",
  "key5": "4DyQnqf7EyHie4wTBqhPmNFyAouCWNdQa6zUfFdLyHZBwHiqUM2ZN715GiKmSSSFJvB33CCGCxtWmSrBeVVq6sKw",
  "key6": "125uftGxf4sySmc227iPHNfTcEC4xkQhhyHu5Qz9TUyXZf1ST4D1Ku5CDHiUauvDMXWmGUSQEvoBaZX2uhK2W74Q",
  "key7": "52goZwf4cX2H24Mf9rbUVGrVStsbi42n6zHHch8Bt8c4joV2kXGhrrCtMMxWNa7PgF7hzaCbZTSxvUB3FgrFhLNS",
  "key8": "5tzb3G6ReHRusic1gSwLTsyzXf8rj1GLW5bZBsbFfQLww6skgo82qAKggBjuU7WptZmCk6YyBrLvkZ28xmF51iEk",
  "key9": "4EUrjtW9t589dqqyKPswnE1LuXhryUVJVzaXUgLar1BuLZCT8u8QBirrts2Wa5oMrM3RQgohWyM4SGv47c2jYuNr",
  "key10": "3Q7H7tej2NiV74RY7MaoQ6AGxQT9UZzbPghgD7FqHw6bmFDCL1M4iEnrVVjCKGBqTjKXqQCwbSKu1BcHovwZSseL",
  "key11": "5NUDvwbcavGeL8tm2AwPzHe2zFoAhE8Gnb4Zph57Xxmb4sSsSSHXdY2hVbv3EgkTfvDU7HDqXvrNUQpjaqj5gq42",
  "key12": "4eP5rT9RUMJAcan1Uqb6AuFzg69WtuAWDnRne3LboohFbrtHK4EV99awioF92BL8GMMv3CYRUkzctuirCygMNTFC",
  "key13": "3w2ZTuEFZBB2YfwRHU3g6hCQmc6AJF8sWVGXBLeoPJssGex9jQeZaCtkaLGp2eTRxcE5sbeoNK87Hmu9wgWVKzM1",
  "key14": "2siSxEpQcuxdqEwQ5p6ijuQ2P6JzurSLCHrXqxyEfBTDJ2JzfBv4Wi1MptdBWjCVRR8vYczSn7btA39NAQWC2ZGX",
  "key15": "3BvX7RuQMG3MxiJxdP24w3GXjFNWDTmCj138LfsVFtPaTHvuTt5BMSQBEmVfD4Gi3CXZLumxckYCdZcp8nSgLFnp",
  "key16": "HDccu17rivKyMcduuUQW87rTE8RuAQkPugPPuiiQU32oWDsepaigLCVng8GphvyQunAxE2RBnERhWrDE4gm3NYX",
  "key17": "5b4quMvcyaYr9LwUQebLuZDN5xvBPzBc9T7Ui9Qwh8zcgCt5qtVnAcqnTEXSZTtUGHMpuEkjdcof7P1CZjS2a2do",
  "key18": "4fBLqThphRK8k2rQQ1qUgMC7dsrSR4uDipsCrF8DXGgJXtLQ78Bf7QUwz4CbmhsAc8Pep5CPxJL1pbYFCKPYn3wh",
  "key19": "5RbGFoFgvwujQBDTEp5MCYvpFjzw31BWaPDH5e73pDVSwr2j2NFEcC6TuMCBDdeLdXyU4spLQDKZHyWD3qUALWPM",
  "key20": "2RXYVgzLq3QM1MGUVkJj8GyMma8DA9Re7T6cYp1hAu8U92WVXD8s9aR8kML961VFv4SRc9W1UagP5NE8aoaEkmfx",
  "key21": "9U9C9Uu9fWDLm665GcQmrj5Z7HVYAa2g69tcwX3BLm2ius15UVgKBuTidekQY9TZoHo3PJxJ9iZ8ydJnSPsMKgA",
  "key22": "2m9h6urikNHJNMyf8yqRktie4JioqezpM7E2JS7HVkjKcP5AALm482xpqZse88ZTByc5y4zaA6h5b6enDQpHSnh8",
  "key23": "2RfV5ZFAziVGFydg3UqZ1juozHN1eJSRB1WtrEqbC34nxdVN8h9pSm1hcYTSYVgS7cjoTK8xEC7z2yx9d6dP3Yp",
  "key24": "3Zm6JvDMMxC28zUG3MdcikmMqGP5sRnjHnhHVb3dgbMq4MZiL4sdnqQF6n2qRdzAHqaGshLKmwsf7UDELZtZUZ8a",
  "key25": "dAFTfYErEQusKUnn6a5Rbj1MMofyEybehiFzW3AudnW7es43TLSw7zLmf49aVoMngECwP8dTbnUY1fg72s4Jkff",
  "key26": "4KkedghqoVFJjtmE6ArXQDSzHqEbkkr1UnGjjCN9iPsBjVGcEjwrGAou53gz6RAo9VjcE53YyEuYe2z3VyTki3ri",
  "key27": "38szErVdQscn8fkuX5JSsU2QUKrHLAsowQCukBsvpLiZ3DzKahDR9CSDTQcJhLymPU4ArNQEcLycJ7fzSJuQCwxj",
  "key28": "3Fq4j9LNx2Tiwwf8h2VWGqYJFqVQURCQ4kiX1pL9m9pQd76hRp9HhtHQvUdTxMgJ2tne16XjkDqatN9ctPVeD4ro",
  "key29": "4DyyApoHAxWnPdC9SarXnCjGBTgG2q9eQneL6NA7a9LqA92miRvM77tDaJLHDgUMm3WNjqqjupJMUN14wyDEmsuY",
  "key30": "51QDZTb6REjzsszoaHG54VvKvPFNCGwkn8t5PqA9dkNLcLnqfkAm4BHiaRhnN55GoezMxYVj2UJUCJthKXm6zAgY",
  "key31": "61mEDvqTZLGbfgn1s92KvquZ1QK111897V38dad2Su79YrVw5Cbv1hdcdaZ3DEA2g4xq2DpaUPWFACuM8QqjRU2x"
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
