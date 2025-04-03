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
    "4YKomSbnJtzPkUMmiJn6DG4MV4WdXXeMiqn7ojT895R2ZqMLEVoqr4EbvxV6agjvJLwXS3Azts4dKsF4JwFNGqLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkAeEQzywFuV7aJ21RKCfNxdyX5XFfYBYaJ9JrfdfmDhRungwqmaB26kL4zZedtvNPs2ggPtvMTzM8yy4go2hr1",
  "key1": "4fF5hULY4STfQfHXymYVin6NCTETritKDG43X57Gv4FfnbtQcTUkHJP6yvxxx3PyaAEXCFHYUWpVE8RXSCt8vxDe",
  "key2": "27C7BpHUbPJcXaLC9Ew9bak8oDdzXXsFyvdUgNiq7ayuCdjVkdRR4dfDnngDfbfWUNnWU65EHiFPksVnPNZRUcWw",
  "key3": "5A3VoSRisi1qn9JWhcZ5WoijgZSARFZzQ3nYFfXB5qV6HMGJCVRn79BcwbG1Ae2Hd11WWCg6QSvTuS9XQjCLFP8o",
  "key4": "5wKu3aqXxJkFAMzBLLM7A65gwzKHJ9URQ3xEFUy5moYDtBD2vkHayNTw84pQCQZgnFbdPTekPUWeCvE2ZsCSrhTa",
  "key5": "3afEapkd1sUYgnQyaENqpWbzvztJUKTBJk86tC73ZBbXMYJSjXwyhsriSixDuYaZkH3TKGsuS6ae77QzM9pgBVh5",
  "key6": "5eXZ6m2ty63W9vdFq2BPQWP8pn87uEy6G8sppejwrY3DiTH3mQUmZUa4SSfZm72om4SusuG568chciiH3sqF8zxg",
  "key7": "58nW8fv7fMNDfKL8Rx1gb29VVETVpDbSEiQRgHcHJU4UZsAPHiSMTA1yCELdjjUrYGFhTKen53E5UxGY6cUc58Dy",
  "key8": "41q3RtqxzGAxmya1mm2j3DfYFApr7DBDRmn64hHb3Eo9n85PojsNh9pNkbRgkUM3KTu6GGKLeMYg3bJZsQUicxfa",
  "key9": "5HLmpmCG6SVdRY3a5UWptg8KVnoEWKbC692JpEnzuqHWh7AZPHjog9DkuUbt7h8LCdfjpt4yC82yCSdvm32PVD7r",
  "key10": "5LNst43rNpV157P9Tm4Fed3qK4mfD7YqGLi3h459XijKSBqSZ7azjic5zBcghc4GkDywsmPcdVFePB3TDEuhG6gC",
  "key11": "awK3qDKTR85JjjppL3fPz8EWVsuUZiVJEn2M3ERR6BRkaA75f5mUDwXrHXFMCSH7b9T5JVe382kkASETFFhFeWm",
  "key12": "61L3f6HoaAT8bLvwQfAD57yMo8iTwFCSFRvZtEu8rV8vaD2rSh49WRAQ19KV78gDu6BEEDaigCsY4VJGjaAUwqmC",
  "key13": "4Gj7C8BjzCDE3UZSLBphUayCPHq8TutX6wG89tAQApEtdwem9tKe1v934H6Cn5GJc6Ht5T16kqDvAdE6H5ucDYtN",
  "key14": "2FWQejDwcZamwqbuTQfGvZTLqyAAwrtUQccw7CZw3sx9j3viE7m12817awYFRBn4hTe8bUpBtp27Biy3CzSSd7ES",
  "key15": "4Tds96VvG9qAepQMAum8Qhp5BPmX2v7fJiX3zxkMx3H1inhS1dLVkLKMARn6ok1yVZLaeLq7iFxB77FB2Vjb2GVQ",
  "key16": "2mCi9nUVivX2tncS31kqr86yArs3aJBQ4EPqV9wd3Q3hL9JmSjF9uikZ1FoBXeXat4A73gfcRguRxHftPLgmvpai",
  "key17": "4M16QQCtm7xjEq9UPLVeAmMzM9iV7wdojyzuAMe7M9D4QX8rar4ZU9Kj9FdWMqURX4q4eStP2JFBHaqbCNnU5j7y",
  "key18": "2uW6qEYEn47UhLQ7BmbkMmUmMnuq9kEZNVWiiLumTV6MKyYqTXrbkMcmjfyWLnAT4vC4K6TFmuD2V8HMKNsEGG5i",
  "key19": "2sDZKaCXNTdi5bWhKbP8UAyYMqLYvRSDNLP4wVw4RHhJ9ETjaUUF3Z3k168uSdLNUZLM4aUngbwJiPs3dCXJg7Rj",
  "key20": "51va9hkZAfKb91KsDLrcBhw3pw1dqeomappAdjHzd1cc7kQe6V2FBtn9BC1fYo45nrHM7CeJVxWzTqp5nm6kWMeX",
  "key21": "cqAuGdNMCh3CmtFchh5utTQi7PWd51gbezFiqkbDtesK9tTePNjJfe7zvAkPkQYNMDv3YbB3GKordb21VYwdnHx",
  "key22": "5PJXFi4W2KKZsS8xr3icLeuhEP3ZbjkhKjyZ5K2yZadKzXDmPx9VSH7t13MuDDEBFV6CfmtKseVenTRmwLgCdDw2",
  "key23": "2Fc64VLRbu9hHtLHgQFK6aAbd6eaBkDbxeeBcpPTU4MnCbjhZyYu5kSLtX2VQDk2JrZL9t3ZeymZiW2Cp1cK84pK",
  "key24": "5hHkpiXaSuMWFsXgST5i2MPb69YA83LEbD5PyvftjzP8sPrVeFEVHfcvi5vdbtYm9rp3WnMoBucpDuBTZ5XPyu4L",
  "key25": "35pe9DMcEE9PR5Un8nz4wQkwia6eEXnCx1Mco7sND4iiZYjscMKXJaht5TCE3YnjBkeDXXGXyuSAzFPqBTt4wNNc",
  "key26": "4m3uykttwdRz1EQGxTUz6dCQawpvPoLqe98UksZ93PdyrYyoNHXr6BKBejoGUYzD1DAP3BLfMmMVM9sgZ5tnEK2x"
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
