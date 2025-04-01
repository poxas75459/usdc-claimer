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
    "49soA3NKVQ9bbyTB6bSX8cBU8qJKYo4Yhf6a9iyskh7XT4Y2EvApiWuiAyqoNTQny8SJpJYhz3tBC5c2RWCadAwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6QSgSK7RbnpHtxNxCVwvMiFJCe3EPjgsAiFXpoPicSr7NNeiVCU6EpnRN6aqM7bjYVoFS4DsZczsxUjq2B4Fsg1",
  "key1": "3rAbcGt2xF7rCmkNAWBFBUk53yBigorKTmruGD6vAEFuAeJ98atEK5R4YdhLjRUc8CRyLwJqkn8yTTtiE1DfK3iU",
  "key2": "4mNvXfiNYE1cbgFSypegwitp7tFtVKyTJfrgz3rNZGLfTaydTfvVxbzDuaLrKbGNrHotDsf5nbEmsK52V6Khx9AL",
  "key3": "2PGf9NM67V5kn7k1o8brTbvR3U1wRMxCBdRUQftT4zsXk2ikpNRgAeyUr93NiaEh6FeRn7Yn5XrAGYfXk57NqsoR",
  "key4": "5rbRJppzb2gzm2pnH3TLEzDTW9yXtvXATYvvFiPBNMeWEWXcAR9bgnRhz4jQC2WJvu33ofSvMtkk9FYQUViG3REc",
  "key5": "bY9gqUkWq75QfyYjPiT3iuRQrVHgMKjsKCA5bay8GMQeMfzW7QjuNr9vLYvYF2znFAE14rRHTcJxv5HnNetq1rp",
  "key6": "3hgfTUQsBtm5n28Pu7VZRiVswhWqWL5PtiyYCGwSWqvMfbupYRwVq73cpAfxF8KtuQFSk2mHWsLJb47fFaVzpHvd",
  "key7": "3oaFJ61pcWBpb2cgXQqhzWGswFoenu2FRtdngDHUBpTF91oSEpb6onqam18BKo8yBfXE2RCZRHhjvhK4Y2t1MAaX",
  "key8": "4G4NX5mR8Fs51hzbkBwMAzBbXf1dme6aQmJE4T3XzFDzZ1DDS1DfvDy3YD5TL7xu4ekLftHGP2SVQ8oboWzdZAc8",
  "key9": "47p82W2gcuypsYFHcQVBnXsjpYf7e3WpcVeC7G4RjviUUfdWQYnhpRQPLyLb3hZ8beqHxHkiVW7fia1fsLpDXzbK",
  "key10": "5srBJ6bqn9ezU5ehb7irWUc5MdBqQ6nBf3v9v9g9HDBAktjwmQ8X2D5t9XsSToHHZk3kBBsJiBqdZBEfmvh6Pz4u",
  "key11": "43KKaeA7RgjhAmFzL2x228dDWGPhmHk7y3eMGMD1PTT94QSPyb9hXuDspAw5rsyzDZX3geCGDXKtUxB26sHbWWGC",
  "key12": "31E4pjSCvuZvseqDmfaNMRT42q17BuprhPuSXu4SxefERCQwYUpNqsa5rMaBvsPABVk5HujYLrxEwpH34BcZ5EfH",
  "key13": "82dcQEysh6eUrFHx6aUeENcRRAApgf69fT3NVUEjvpASzWBvYbsmZKCe28a6rHpQt7tjB66UhrAT2R6hEwnfDzg",
  "key14": "4hXwGhJnFPxH2BUMoUnvJasGYvkFC5J387Ndvnde76CMWTBhdYdhd8P1K3YV4WBUKc4X1YtLFe6zzYM8HFX5vHAi",
  "key15": "3TgcmTJYQJY2oRrcLX33ve2GUHbbwK4CbWGhEyKQmdDQ7xPENNspA52zWXD7XtezHEqnW4wqSyPxz5MLQZJBpwwE",
  "key16": "4otc2Sp5u1RCfudZFr9gF1KfA7GDDjsLeDobE2cU5Rm7vyWMEWLqCcLSJphgGoxr1oMAsFKNwqGCVJgJuWX3miq2",
  "key17": "2ntN8kEwopCZfkr7Dt2qU5T3JwPWRKoqCQGWyPVb1AUMBnk1rifDJ26KdEhpcc3dkwu1dRC9wDEEqD42nBgd1Mij",
  "key18": "DxjmygbMYNy6JGdqiWTuQ6F9wSFYeDSD8KzXXb8YswRoUzZRZLbrPWp63TzUKMBPraFp8G2aq7zgmXr1sJFv9Uq",
  "key19": "2pibCs75w3VpT1rsY9z6kEdtk7CGnPHbuhP3dtvHXWmcwxGXkCWoQ4r8JWfdRhe99v3kGVfv9NpV9VmrwTe7Cz3p",
  "key20": "2NmEABZy5vYHczX6XRsA5xhSUSLLeuMG2sXFaGnX6kSv5WgBtCYGtg8KeHm1yUzrPSEfXpk9QhiCVRCKKevFCWPg",
  "key21": "neAuaZ3brbmQSzjYrBFkB7vNU5NYRhf6Ti4BAeTND2YgpnSV2GY75JniNTszcYGbZnrhC7xupJ6qjdFEjt8AGDi",
  "key22": "5qtfLtjHL2pXLj5fM4dkAnibgoEfFzTCoNPTFcnTPsWSMjQ4JeuhW26VJCQETGiQvi33wkxVnaaZe7Hc6bHSDCCw",
  "key23": "88i4H2oXSfRLDQd4bcvnHADYJXHY7yhTqi5HEYUemJNnwKyjUNc3bi2tkFFJSrPufNMhznuRBzHuL3yyDmYJUM5",
  "key24": "fFWoMoC6xSn4qckcikgF5A3nbpvmUPSJrsxsono8QDbDp2MyxnyayKYcUxiRruG9VMYP82UrSx1KxzgqkbDLD9m",
  "key25": "2yQu1ms69jAZYRk2eCSVYvxjUAX5LkvnqpYp4EMYVgLNbsViRg6ZkKLzYiLRqaQcS1wy5nJitK79qCvGgLPNKHYS",
  "key26": "5ir5cHfMXE77hM6Rn72EgPaR919JcdDm988a4Ks7aNbZaEPZDTEQQ3hw86EUkQsvQxuBHX2BPxEQBANo2oV8M5q9",
  "key27": "3yTAMGkmdfD9KDA38phniThsEMotkW7BKdbm5ikVgiJSmfAy3XwNYHnJw7HEL4hDoimhyJW6TFahfhJ4bPGcFmLU",
  "key28": "637V1d5nFbbQWsM7uKFXXB5NKq3gMP6oQ8KmmqKNdLAggY7cNMEPg9rdQFui7UDARLCoxS8ot3CmR7KFLf1wFmkK",
  "key29": "36cZA2puXPT3FJGN1ues2KEj6PKf6Z9r1B9FqCHMo9vZhY6UsrZHevTSbYBxLQefRwD8ukyPQkcTrt3a5Kp4RbzM",
  "key30": "35Z5pM6UDQEMt78Us1tBFztkaJNvt3ufnVeitiLNrJ7jrEhzJYSzoxTZcAU6XYnfpHjqFsJ6pgJkVEBHqPv4GxVV",
  "key31": "53D3EBjUZX88HdE1s7UAQ4WQ9Lh8bTgrSpfHK7NMzj3xcLn6xHmSdkwd2Ya6sABBPx2gLGjsYAVy5sJ1f3i2Mufg",
  "key32": "2ZM3gpos1WYyF6E8KzPBw5qVBJ87WVACvQhMrmcvAdPmFjTszacUyobQJsnBVLDjNP3cREQMTvTi5H4W6Md84u7k",
  "key33": "59jqyBxoxyJJEsuqYnYEJXDxyXoZfYS5zpJigPGeDF999nXfoLBdzAtVp1ciayWAS8G3KaRsLRJUfbsVH3KXzYAW",
  "key34": "3Mnj7wuveAWyweV7WYfJR1T7GErSLoPJm8bgFr1EHmYqMDrwLjgYaYxMKV5eiVLLXC2vG5eThKrA5w7mKUr2XPpv"
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
