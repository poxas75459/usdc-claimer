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
    "2d7ZVvRbn9cTQ69n25dxLhWUPUj1DJUwtRX6WZqcmAuMmeT78fgdfurMNGn2z7aVVMVohNs91cvF2kYwSaeyTe3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpmroVUHxMFKyppgPjhMjpwMjLAGQE2Mcf7ymD4EBt7WpwqV42r5BP5qXiRLQmabsvgyKGM6tokh3HnVqj7LuW8",
  "key1": "5EDn262guSNoPMJdpX1WDnMkmm2RXU2Vm6vxMeQ3DeiDcSb5YSMHCypnVjLS1LdbuVATsAU3N8uT76M4Qd6K1pMb",
  "key2": "2nYm67mAd3jByBrWQGP9JSvXw8LqQ8BYgr1CWvnnGTPEbtP9ghe3wB8wYHEYLNjJVxdLBCKjrURWt1PuyhTYjK2D",
  "key3": "47PE3uNNyjz1Vebu88GGApdJR9xwk5hDsttdTmudiyCBWeTeVHuusypVMgK7xAyGaEoVXajz6PFsP42vh6mZGPsX",
  "key4": "3By8VguSDb5p4Jbt9dMHU7rdH8z4Rw1xRa3r3e7gqp6J7Ky2Fek8aMKKVhAVyMWGBisZPn75TY4yffGyjH9Mv1jn",
  "key5": "4SmtE3YgbCRnvVYG8nugNCa5FQjmwhoxKAoLpGWQEyErptUPwKstGUEewWUMEjXn9nMGsRyfw3WAfuHGtuDDmbiG",
  "key6": "3hs2rveomQUJwr4EgqCoT3sAMYZ83k52he2SuPCspHWdRE4pzyJ12fDmsyX7GiD2GHiAwjW54Q69z12fULjg3ywp",
  "key7": "5fjQzzD6XsVYDi3ahLf9Nw6G2SHJFWu5ZQBh2zu61FoMuwdxXaKiAtYP53eX3iiRPL7CFpsEjwZJ2Hh8E2Q7hKeS",
  "key8": "hCeqazB6od3G5tbR9PP4PJj5VG5fve5G4ZYhVsU53EnnRcsWSL7SH21DH65mfJFsjzXYaQ6PDgPVo41eykQRNYp",
  "key9": "21MoHNeifS62hRNRvmkxH248oBfHTZfhYhRRUqKwdigf9TACEfF7bd5c2gBpKUJgV8v7mGpjXcmbCnDYaxk4difE",
  "key10": "491jNtbx1kopGaUvipEioY4mcjArFuUAojKbXeUp2UTThZqnGLqdYUKaQq3S5kGMe6i1FM4RDBNy3F5HQbf8ccjk",
  "key11": "2UY5p21s81s7hpAqxmYYqe6kmcqZtCfyTa9ibWpNdCRtrkuDHjKtw4CXnsgZxWupn8iSw7BA9ujtBNiaBystfxKb",
  "key12": "5BKavmZMSf5Z8C1BJhk5bybR9V4ZSKK8LcKfmY2134AUjWHCv6C9SZAfJ7JTQ2Xj2iNyTSjKim8aRK9QVFTcaUVy",
  "key13": "3gm3gaTA5RU21EuSsvvLwwTYer8nCXTm4CubPMfEL9jLUcGvNsQfnxi2zZ8LwXKTjuQJrBfYjN8aBkch73RgVt4e",
  "key14": "iPevy8aqvsons9f3BABD5MzSXRwp1L3Vk6saQpj7xygobw2jpdomb3GwbVWhrm6K6FE17RWoKFozu3rV8wa5xJD",
  "key15": "5vZTJXFEb9krxovLEMokSe98M1AacuLVPgUoKxYKNV9riesTfHq7xcqCfFaqjV4SFErnYsSZpFKj687ftyp8u1da",
  "key16": "4GcM1kcXMUvAzbeBDb1JQobqHPKxz17ykcjd6P5A2q1ajKm3GgjC8scpo1cYMtAZN1goXnUqaNAHNiKGvzERxhQq",
  "key17": "51Xd7K2xAD1oNH98F5XYqaAdzJSfYXEBBmCkWN2bfdz1aboY45QRSDpDd5r36YKCQmuNpeF18ZuNX9knU1ShRN5C",
  "key18": "2Q5rN1uRWkXi5SfRL4CKzyjK2eyEyUZPp9oXCn91X1YsFD6nQrNkycFr2o9cry3hh7zn5XJWNw3VWAn1eHW6GFnX",
  "key19": "5eE5cYRSNgLDe5LNH8zhTt5in78A58vitRypcZt4BosR3S7kBQCEBJ5t6dP2eSjzEXYA4unqwjWUxB56ayGCV7Rs",
  "key20": "2RgPrPC8UFMaDHc4HoWzMrUF8K5nyAsps6XpnqrrDXbKKhmDyoQ4njeLnixoJik5kySi2swm8MRFoPeT3wDzdS27",
  "key21": "2pXMjdXaz2teS6qjepfNs41totMTUMr4DfK5AE1jg666rS6d1FLEuf7h6ZyUgrRoGg6S3oTThTbtXimLqV48H26U",
  "key22": "cUKHyzftQC7FiGToPTftKfGxeS2szgTrNfsjq89AYubJfTYC5N3fRYTyw1WT8hSdsMB7E3LT1b5RwS7aso7UFr5",
  "key23": "xpyxf8C6ssEbjk8Qob9jJAZMgWtHaHC8M2i9ZLGbvRxcteD67JrEW3Fd9A9MnVaGZY5vRy1NFHByYnsKA83h1rV",
  "key24": "pC3fz5vHRQMtbNGnt6iPEnTgA1qzd9dFmQ1EWTwBQ8WScCbmr1Dmok1WFXUZHGYGeJWxkDinTbRJTjMEJs6kcV2",
  "key25": "5kimDpzsTWaP1WW9cbUx7vA1KZmDByghoPBr8Kn6DBSWondnUB25hAcqUMWdwxgb1Px9ikMsPP9KioSh6CbWyJuB",
  "key26": "495mXVt7tHdgJqEqfa8sCtACpSpgDm6zoPqBnG27Km9Auk4giiA6vQJX4yr8j3KhDnLF7ZDSh2A5dL7QwYNvQgXG",
  "key27": "4aappLWA9JyepQJLVnQaaJeto5pRrQVdTDK3VBCSw9sbQVdQEuuegF4gPtiev2D9KK1wqTDLbqkVYKXmiTDSJmbY",
  "key28": "25doCMFHvQhC6KdF26yxfzsaovYQAqaS9dWpkvn8Uvc7USkLA7StFPW3HASCTJ7uFvGUQsHJdtEuuYmiGusDhpG1",
  "key29": "2eV1Ldhpbi1H25AvaPRoVrJxisshkeNHKA5bR1zndgQcJUSqBAFzGjh4gXkGm7N8RrQ3p3xMu2Mwzas93PiSqTB",
  "key30": "aCN6NgSfBm66RBLRtWNess6HgF82w43iUYuuU4uMdkRdR5UbLRWLoKK1mDH1jFxtXoBjPGNJujKazvex9ZaCpjT",
  "key31": "63nFALUzU34JnrMUrxK1huT8E2eiGp9kVLrfVvefE96prjLPic5tRmqbL8JDiCu7WgNv8oany5WwnyXbzA8i2mtr",
  "key32": "PmqkGLgqAha2VaVDzHD5KVJEy2RfYif3KeDN6hGTSMub9tTfrcAYM99dhKeu9oRXdp7PJzYNCbneLvUYf6vxthk",
  "key33": "5aGcT7XhgHisBVmUCXzj2aEWQ1FnvWjWhNTff8YRR9N6MhwkBtrRJHfR46mPkuN7ideUda3KBuYWg8pNr9XRTyDF",
  "key34": "2zEqV8xPe8eW5w83VYsFM9NuQzHVvm4oRjFYmcsb7g7SySfMn1vtW79SEBL6wVsesVMtdVXfsQ7QjSffZaANY3K4"
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
