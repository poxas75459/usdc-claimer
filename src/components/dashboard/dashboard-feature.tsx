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
    "zJi6BsUCp831PWPRhCUS7sKF13dJBH17e6xar1KeybAM3AfPSsoFDUSi1L7oQTKBRY2UTxzXs1wyHE24cnSg7cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1ihuF5wHkz7RJN5AYmbg3ePmr36zYPUvUkR2sjPbHXpP1u2YNdBoz9R9ast1t4Fbx3QVADS2RuGZ3qVrdAnWQj",
  "key1": "ZMmw2khunSqTLFa3nn4CivHB4LQgThNfJqq6hCpNyDkRLaZaX3PH8SWu55B2aNbXo4TEnCQeoi6YAP6JEVJBQDC",
  "key2": "3NnnpLsxgubwQnhWjXtPxmoogp2XV9NwaEUEL3L7SzBb2JWR2PM5oKyABSi4528pDXjiKg1mqjhkcGqg1P3TXNDq",
  "key3": "Duo4FCQs5SBDgrrQUN5RpPNTY8bmawBARaHhjDSc5WNMFPxdKhSzeVgKuLRQxcCgtCK349cwf4ErMADEenLhn93",
  "key4": "2ui7KhrgMYx2zTiweWFF6V1GUZjPH27c7xmd2173EP4LshA5XZrbRkXr7NNK8ggE6DoiW2VJVNqmQJJSpBNPMP16",
  "key5": "2r1LEvxdNaUQrZWhDw86vE7PmrDELnppH9WmuhtKsciz8LbM9WuCro1jTdubxCSuesALe5NAjexdNcY23upBS4Pp",
  "key6": "5uzFAzZSUX6vgM69oxybpM1UN8rjtFvRYQbypCWpDnQtXHeNCTyUjf4YyY6E3dUpooLrPBUz67ooUsm1e2Rv34va",
  "key7": "35DGRQQtnA4PdptZhu9riEN4nQrKPHtYiosJAGkbvGU4pk69PHr5rnSVue5DpCfu1g8DMNniJef6ssyCAfzg8eQp",
  "key8": "5Su755FXgsUavusoKyf55drsbwMt63ydS2qXZFxiv3jUWWwarHNhFWvWUHDTrmHrMcfSw4pvg7hrYD7bvW8iQx6x",
  "key9": "4zh8TAyacrSeSxbzU7uwHViPzDf3CvEihAQtP78Zd1YznzJSv7N1oX7aDTzb7UzZ3eJPX1iJcEKfWB9JEU9jwi3V",
  "key10": "23xGPPEiKbkcat9WyFa1gs8Bz1wNoL8NQd56b1FNp4483SpSycgX9SssyoczxcniUscgi8BcURtcjomJTpkFfR8E",
  "key11": "5HuVMGVMb6hVHNpZSpxat6vuk67U4qJ24uf1hhjFPNxetx2KugZFpyanr5pnBToE8CJFJ4T5id6iATVgXtnMU3cV",
  "key12": "2StmFDCSbCsp9qcvtT3V4Z3ZnYTxhnYUoDfzt2Q6U4rTX5utf3ss9eqL19QajhcATKbYvfPFqHQk3WRB1qkt92ce",
  "key13": "rehUdTmf7mejr53PKNsqDv3JJLjwPkt2Ruhui77PN7Q6f3fregeQciA5xXZBzEkskUbB3ymg6GGXhxrA6sgpq8o",
  "key14": "3vEVvW9LuWnAk3M1se97cnDNkVdZNXH6UNNMJgk9G3fbmxiDjPzXVtwcKo2SqPviALVz5MDYcGgcxkJ2fQ9o2yPS",
  "key15": "5uXihwpFpUZfUAnAnr25xkjV9EXgCPTTB4qcSKzYSuTACVqdzBDxKPEnmTNPaoQVqAUGk89ob5jzjfu8tRJV66ku",
  "key16": "NXap8fiRUqdyS57oMqmKsPA5jyS3Dw8nUzHhZCALx3VXQzkwyg8CoJ2bM3kkfeHnk9P1p1j3E6Rdn6Er5dXSzP4",
  "key17": "4BoTxhCRsiRuuSSGRvELw6UWqWjQeADxq3j3aheXNQFP6Mzi6rfFqFMFrPgXxx8dx99gHsvVC5iUUupLP1ixr6gW",
  "key18": "5hsTWgQJ1aNYfcfp1TKv2MUS2xAH7KPjeYhFLQRkxbZZVNV2FLXA7rMVYWZbNsyvYWCRJ7AbiBRk7baWpwKcyQ5V",
  "key19": "3EPgJvjQdKG1qRZWibpGDpbUr1XPgCPSwz9rCv6ywFqSPyuTow5gCmVLKN35mNZ7UMQWuWZzz5TNfaBvBKmrNY74",
  "key20": "waU5cNmy3R4AuhYGLpdt4vcZK5Feiiact9VGkrhhBtBJQEBvHXzqkdgBdLoKq4s4DCgnRBgcL2vfM5o6Q1HYNNE",
  "key21": "5c2XA7Yi7rxPB3Fg2HKm6FaQDWB9SZLFSdHoEDT12nw8NkCbyKgX8FRYaJ3bFX4TDpaqxo38v7vENVoMtXxHgty5",
  "key22": "59MnercK9Cnm8Gn37UV25T1yHtbCvovfUAFbVdcvu4KSmTGk9gY3oa6reN8U437pK3UkJcxuifjx665RF9s2uAF5",
  "key23": "ry7Ao4w6JMj92Ao2GPYhnonqjLrRhKfDo6haGW4xm2iP7Moje6GYnRsZarSCJcgCSeSqC9Kv1wP8EnTSfyiPcxU",
  "key24": "ntVbZHmGjSZFJHNfxAGmLTycXQMKywUzfAabafBzunuqRNCVwuhVoZWQwhkTPUDkHw8sPTPdfe1u6Hnpn5Y1nyz",
  "key25": "2BmjJLi3Y86Rzm88KZG7oe7udZjsp1vCx5fxrbL7mhdhyU6YgG54yM7z7XCYX92fjZ3aFds9aTWKEDdvb8mijEuv",
  "key26": "4VgcU4YT9zmqLVbepkPk5Vq1H1Q7MnrARSHL3A6zzitsZHC1jZ4DrY6x7m7pjNfUSTp2as6wFXMKuTu3fmzEXEvS",
  "key27": "k6w3rEuw4wbjzGuqUGZrNVoMeCjAvYiT8YvgaXN2en75NA6SLfchqeBkZm6cRYy1vLncDyLomGc2v1TY5PwM7TC",
  "key28": "5FaAwfuZNS7dquuQkoeTfCDWBBcsZwzyy4gwyjttGCiRjTexXZjNToTgDQPQdh9uNfp4QBzFxdZSEGr4VqChAp7G",
  "key29": "2ZJSm31GvXLWiVtTTojDmARVFJpFA9MdoMh4N2zTFFKArLnYAbZMrh4KxeSTDdVE632EffQEa4b3bV8eYG9zEs2M",
  "key30": "4LPyfN3KGrAuUn8iimnVjB2mihbLQzy63Zs2qgpKvEaqcYGHaGGdRaUXCEQjg22b4xtBX1rKRqGc2dWhTfwgp1Ca",
  "key31": "4Ny957adrYZSYeKMxgkrHNjJkk57VSsSbe99SeWx1fJgjiHyMi8QFUK27o5kB5pCKwzt3X1fGoosGCCUBQTz4F5y",
  "key32": "2EDWErH36pwBCcFPEjFHRqJf72n1dKeDkGZ3Fn8U5fhCvdbKMKmYTjbbMaH2MXfqH9pAYbFCQoi9k3vRRfVPneD7"
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
