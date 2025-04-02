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
    "3a92n5t3GgimwEhFzg6HXd52kofFYPE575shmYzGyLkqj4eCBKDyayUY3rydrLCznS4UQ2FdTc8nerPpQNoojiDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yort7HkqvmMiH2Y5QzHxZB5Kn1u8EMAUZsTedAvMBLvQxse7CtghTNhgaEK9VuaGHwHcdyk9kHo3oCx1ykK7NS2",
  "key1": "B8t69Vf9sMhEWhDdzosuWATf5DtjXYGunAcfwmNH2kcXiFBDzsnDRiBkY84UqaizitzuJfPZ5XhCAuTveZHM6n3",
  "key2": "3LoUAjU87KS9Vy87oGcAggiRkKceXUynU5j1dbxU3hN3JjzsJa44AhP5ygnjMkmVoqjwTUfgWGbmSFjbYuPGhiN1",
  "key3": "5Bds5KZGztQhgf1CyvGHGS6diz11vBafuPNSahbXkjWhXqbEjJ3buwYuBQM8zJPLQspfxi5Q3bTAL1corf3UtxzB",
  "key4": "1eeGgLKoVhuadoPnZmz7G9qKVGx3EbJTLHr9oz2JHV84b46i2kgsEBW4RTS8mDo46tSyZzr1a5FHsxWsGyi5kZN",
  "key5": "4pDCWGacr6rZjuVEdpxymT9Q3orKMi9YXHWMTaRuNRVyNgGkR1iBL5kLTSnKdCisoiw2ZZZ4SPcbkAD18et8YSJt",
  "key6": "4aB5ombYbMp7CbL9Nmh6TnKgzUNkUPjGpBcMjedtW5Znt9oaM83gwmDDe1EdYupcQU7HhtM3nPcEwn3ugaY9BAp7",
  "key7": "4j9BgnJUqRu8QnFEwqhhw92MBca8C2c7WvjjGHtBSZNG23uC7euu7Pi4rFMBZ6vdTUYpFgkuqNmTR8385FY289yg",
  "key8": "3UYffwYzjHjN2YAADGV7zX9UJ5wGiMGuYPiFmoQFcHnMpbMA295nNkfLLpj5tZTFvFA3LnsYaLMnghoUC9gdgPyq",
  "key9": "q8XDR1UtV7Xehe4pHUaML8fYfYfLs21HgjXc46vRPiu7QhfY32raNLzpMdAyZfWcRB9f5J9kNZe1zLDyWMV8xF3",
  "key10": "2eBkdQyhD12ARH7XHKmg5fkacfDpWAPPRZzFDRBPuzNoENV2ibpQQC5FeASmBP3wnwgbLoH8FRgxHF8vhHL4KZC8",
  "key11": "42k6vYdYXkefzzsVYDNmUEPc64EvQTfm1NhTExyC27mwaQQQtHzZUnMQLHW4ntDhsFi8QYb6NVpkAypsHyDm8f4N",
  "key12": "2yGEMx4QSZVuQDHQbNCYgScK975HHxkBbf7C4FgWPdtkUtgvTHDcdKxttFTdwQkoGdRKxHh1EseAq44gpYHZfecX",
  "key13": "2f3LoNszW6btF8jcncrCGSM1FttMe2PhvHFEascBoyi8UBbcgvX4Sw9KXPhbxgrQhUQpLznGsPMPm8c4mNLnPd3X",
  "key14": "5pVuvkHexto1HhpMcpMEWiSgiPGMXeNMobC8dzo9zPFthuc73qgGFCjY6sqtN2cMK7m7qpzoo33NN3zwb27yiXQP",
  "key15": "61T3bc28AbFFRYCCMfZ4W3QzCXn4ZjAguUrxTiU8GhSCRgVda5Bf68oLPxT4KgwZoLLYwsmmPGAHK2f1MvChPru6",
  "key16": "5YSmxPJAncu3XAnCyeLt3DwRJbNKGkPtwzgNEreNTzE1UuUbkCXKMB8rPJ7SYVw34fVGvhVaB85pgSjjjKG9GMDY",
  "key17": "3ggH9WjPKxeMvtbNwhFCKSxHHjo4TETCqwbPUbXNio99ajhHq8eiErSDA94UAkCt4Qyn3nJVB6nsSeu1cuRGmiuX",
  "key18": "pU721dMjJypfXGaLaVyiwyFcWwNPT516WhuX2aHnbEdy6CsXLHWwFPQJDeJbhpJ3UEpK8BYswFtMaSnKUi1qCrg",
  "key19": "y8ydQcHGkxAPovVaVZDqHaTGWPHnVqBj3oYE7ieyCKp5P29FHJy9Aw8GJjK3L6Guxq335hNtF89og91eJAKpXH6",
  "key20": "3VanJaEvKmAhwhZ8HfSzMxdapQaN9Yc2vyTs5q5FqA1XomJYKDosk75JCKKK7LQRmmmhxAstZQQLy9at7udNi4yw",
  "key21": "3m7uxvLbX84jEsGy7HJ5JY6zJ7A1hJbSmVDh2rYTqsq9eGgJvP1UzVzSVMVnRVRG8guSPteqQd5GfYjHUYtxEXNs",
  "key22": "LPYae5QXcu5k2K13QjVxqpgZKag4DtWJwMj6kNR81D86S2cp1SVM29RByn7s2FqaVsRWW2S3nxZ3FLbXL42rDeg",
  "key23": "5Y5JPMjJ1uGtg4mYzDvERWhMzbatUKwnGmWVSKc5vhEmWG33wycYjRoo7snoZycdr4NnCQ4pUNuokGuf89GYSU3d",
  "key24": "4qk2ejcvfEvzuMYHQqAvvqFnVJF8rNGhL46s2cMqyYrz98m2iiJV2Z1y7VLq3Z3VPB3sgQJa7UudWwvoZNs96JqJ",
  "key25": "2N6gjjYURCnLSZhGtiRtVcwTk2zqd1JVAAcqrH9mqeB21dPcW5v2RJkUCRUWLuWE8xREGcsZRWceRBgQQx4FKfQH",
  "key26": "3EFRoTkkd9WBBy3moUjnjfWuZokDg8eXQBL2bG1gpbYkEy9ChHgzTv1YQd33KnR24Vn8fayt3GT7KQKGKdhHwt3e",
  "key27": "vu82RMNDNT9Kszmeo1cp1q1Cm1k5rK7NepU9PkjUXm6qPGStbYmFVPvEDNvxmbJkod5bGAMAWAK7paHb73LyfPm",
  "key28": "38LNZSVrpodoyT61Dwi37rc87i3HVXudG4GPpYP2xfQEyVactWQ8SgRit7Mcz3PSWrjC7mzLjYR2ZV5M79bmnfev",
  "key29": "5XwYiD4wv1GHz3nZ3wZDMWmwZe1UCyEZDLakJfR69fomEP3zTT7sNZpvg8mfhN8MyCUdozj7SN31bq2GbsPCh4z1",
  "key30": "26MYi3XTb7PPCqrPhoF7kuT6copFNUnxiRh7BDJXHKpqKqpD3aCnQFMSBv3j545e2bBRWVWMy3GzdTABte867HvD"
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
