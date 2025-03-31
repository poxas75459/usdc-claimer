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
    "3VKpkr49w3wXPW52rneN21nQkMeZQu7DyoExwmW41QcMEMBThwbZZbTM79f6zmTxPMCerv6gzgu9Q8uYS8b5e12Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34UWiNcKGWMFM24hETKuoRbSh5TBXW1qNcW9NKyZBWTakLEJcEnmzyVRmrqHXzc9QqZEUAs8129qW8fd434GP8gK",
  "key1": "bEndmxRt1WvmXcPEJWYSKSZbKkADGkXt5zVifyq5dQpFfrhJ4moY9awMP4uWYjX21WhhUnBybb1SSg9iqVh2FXY",
  "key2": "3YPRDSjTmK7R1HENC9nwVcPwS6PXVVneFg3kcS2NEF3NR7eUqof3aEPu9iko8w4RfKsaFG1GPCsxUt8rPmJmJUKk",
  "key3": "TSsk3gSAmSjYaYmKTwmwECkXW11q2uATVmadmEcwa9WD1TYvr7tZKa5ev2S1jkPJk6CUWbD9TYTWqrEZ8nBcJPx",
  "key4": "5jRNwcSfymQPZzgdd4DMCryLMfEsd7VU16JNFGKt6oHUH4CNT3F399ptgjuSBoRi3UVBRvLhAFrktm6iefTMezag",
  "key5": "4DB6wNkBXS6Lhw9kZGXugQym38MTmaYDcqfEuuKKX3ovEvneRbvgVQERyQgJp1H2b2JvW6nXAZdDfQ5ECHBt6u7m",
  "key6": "3RYR6T2GLeweLQBc8BBa7PKPLENNPtyrE7nMkbrRbtExFJmBiUfoFnDtV2hVmgYwTjXoWWz9KJnmCoin2CLQ8tnC",
  "key7": "3Zu6AJ9vk3P4GLUJm8Hi3zpVKpnEEpAWQcbPRdJ734svgi8uQe7tqrdpT6ZzPEwQL14hJhRhmsM1bHTKEJpvE6c2",
  "key8": "3GCRkV7BNGyDDhvZxF9w8WCF9geDf5BzXcxUGqMHR9QwcaJNcQr9n2krRV88tLTh4cxnLcK8ezVFNYBLtqTFvMKz",
  "key9": "2Pnb9mMU3Kb6DnxSQcAzSyTtoS9Vfok5cUAGm9nNU7ARRARzU8FdTi7b4dXk5UyTw2SpoQtH4KGWo58mt7AfJ9te",
  "key10": "5jY2SZJXVieFvF9apx6PXjSeanJ3AmVhCjegG5VA4xPJ1MTVvpmDUL9oMeYHUs9511yu3CfRU2acTLyktXLpGjVd",
  "key11": "EW2czEkBYASTLZSmQCiaF4ajxD3nh6ne1iukPgi7cPvAQahybXPJy4npFBfAYCwyvk33HLBbx7bSeeZ2buQfHhz",
  "key12": "52ovBvPHZfVKfbHu3aSTMPe4jbSjwY5krQ6EinPG27AEDhL1UjekQeXqQvoeZy1bNsfWvyrPsMBjx1KpczHVTyZm",
  "key13": "54KhD6xNSirrFvRS3UmbkFXf1heANYFoi5zoKe611f9aNkc9Zj9cgL9DPsw6k73ezN5LahK9gPDcBPEkoT7PK1LR",
  "key14": "5kTp8kQvSxmuPQgCUGjykQCH5uz63ygSd1kH4JK7qHZ8SA1gt55in1w3utgMBgss8dmz6BygkgA7RWEgNDnGL8zn",
  "key15": "og2yHuCRuZFrcoEBbshYXFQfD1DwY7nUvQsPaYjJmTreNXcxfLf8H3YHL9nth5LSwuDe8PEaxgaHcjaRCC2E3Mw",
  "key16": "W8A7deCcGtThwgPTYikgDtQ9cQsWzdYuTJtNQjJ1k3n8ebibxZPXrr8hw3V2R9hVwzKcZfPps8o1Lz61edA3SnW",
  "key17": "mwzYCfwFwc8c3WRdz4cPtENnVYhrcgj3tn2LU4htAxod5VZEdmtGNBXRn3MUWZ6LnSXq9SzUAy5MM4yUfGe4iv9",
  "key18": "ApuzgnxurC435aHRGiGFUUruQw8LVukG5dhB86LuNaSQKh4kFJH7jHsTFvKVYGUUgrpYgtaz3q2KsxxyLnXpDxC",
  "key19": "M37TSHnDrsGpZR7DuPQsz8CZdoPVpfW8rJBSeBuXr1MpTZtVtL1eTZcwWuoi2TAZApmz3KucFZRyMnapcMJQwXK",
  "key20": "Le7EJ1BkAkkxBdEKMtYQyCrc4y4m8rHEH5B5gDegDE8bXqqHLLeYKKSgDjUhSoPujjnHGPowv28BaRn3buDYm4n",
  "key21": "2Xfs5haKEZkE8CTHMSiiotSosABRMJWz52MDcZycw9dErhySRVgrmxNr1Jw6dxQL4JGyWv7zFTZk3qshtKd6zJF4",
  "key22": "kuv8343t3rQ669aG68VepBaxK5KSf7cbRKaSsU8XyRo9v9eYuD5QfvYy91jFat6hWKiVod4jhxBKtwudkTPn1St",
  "key23": "2uKhCvJDYAUxJ9gEteePLoiGwUggfwVZ47KmxpGZnVAZ9K3dPZRYVY3hxbj44beaRDfQBMk6Kr7xaHkyZMBxaMv6",
  "key24": "5WGDtLnP5ibiDbbtgxzDt6EpnBytwm7gnnLGhbzXyq2USQw6XVDbLCjJLnWG2PjZLs77npXafV4UpxvKMWfMCd2F",
  "key25": "2RdowEmyTR12VUdiUuy6jYgrT7ihY6vzeXRYyr7NkSoBB2QcsQYhitwgBSzcWmBLvWdpuTar2syUXAyEQJdjTP1N",
  "key26": "4pxEpvhvJcMBMAPpeeAEo2JA5Sk8ry1sWDVZKUURUBkXYZCZAfLGMjy9EfUf3U1AQqBNeX5298gQqLm3AwaPbgzE",
  "key27": "3mVJmjkQ9Uson3WbgwoaH8f6FaErsynmj38zNrVDNZHNhY71J8RvjvDq5zvynAMkxt5qnGAWmYq3wp6YFjHF9CoC",
  "key28": "QtcP3vGwJ4RiFM6UrCy1hK16BFXELoprPwpNKtynnwdrfSwFE2g3ECyLXpvg1mhPE1H6WWcETvKkCJFmpGYowfB",
  "key29": "5xFoPdbzMMbdPho8QDQM6fLbMZUwYZpZWa4pjvtuwAAtvAXTNuGTmSMQ4AizCLdGkC2N8nD3BDvpoXGxkU9J9oYX",
  "key30": "5fkGv63N5KTyGPSyYy6saGSULQZmBsuFBoP7zrXcuXWnN1Lpb1EspHorXRkGbQwbwWwZdS4kXDYeBY6WBVqCgkPb",
  "key31": "4vCXUXDP8yKy7dDzUZvYGTfgG7bE3vr8hzVerrFvFn4Dz4vcHFCaMR79zcLg7vn9i2zG6PJpszBi5KUJv11CsXVV",
  "key32": "4oxzjpxVPTaidBNV4vziXnRXZha7hqKZR4vbdyLgqT4sWp2eXFrCvqVYprXQFMsw2z99txeRzPCTkSGVKfhS4PkA",
  "key33": "4bjWrZJxwQtLxdw87Uk3Gw8dk3p9u1aYqqDhrgo4YJxSbxzEb1TVZeHAYtyEguJCrJbmsGwrG2598FP4bsQcg3kN",
  "key34": "3Xhg49r5B1T8DsVL1wHqPpeaNpj6oGM9d8bFvqn1ALJxQvAGtEEDyiG9wq77r9b3S6anNcduAL4mcMFtnFEuho9D",
  "key35": "2eHgbU9hm8wJPmn1Zc6YZFYoCebZ4aMVkxT92gHgaYTzFHNu6Eh1RaigjxRtMdhVkv2SPJQc2yEQqFmLZTaqdiBy",
  "key36": "3sLi1HEXXutjTd81bKFQxEGAJK9oUUGDQKHXxTybQHTfNhodJYerxjXrj4MPjbuHZwDW63B8QwmZ8hMpBtYP3z2y",
  "key37": "64thKCBr2mBewpDry2m56S26XXWAdosTrt5KPQXN4f35TqaSPH1yB616C1ow5bBAHncxFrDqvVBwj3zDAnxKxyqK",
  "key38": "4EJznLWxEgQ7PxcqjMASCmZ9MjuxrzcXo1LoK17w8Yg2z8XRQizto3MpgRds7ujdTAA1Zroier9fBcdZ9tSstG2K",
  "key39": "4TFbBpRzRW5foQ3M8qCwGyDBqhTBcnpx9ZctLa5h4yFQXSL9nkDYcX7HfwxCufXjfec4jCkjc7kUJKf1VKcGsDZ3",
  "key40": "26yQgLxR5fuzTptqkZRvJrkkGou7JPx3roAVY4tJ2XipnwxWM6MxaMaPf9ui6huDNtQe4Nu8dp3NgoW3dVdiUDam",
  "key41": "3qneaGszdZtJ7TxbeVKAadfb5VfbXpoiCVsVbdWrA6fLhLzBpEndkxgim19rF9jzN1zadyomV4aJQyGjunirnawf",
  "key42": "36nCdTHabWodREdzoA4zNKy24k95NYkCho7wA4c6ma5Jq1HN5iV2PA9RCLeWDR6HUb1bYAuUSmnpzG99jYH1RSYr",
  "key43": "3T67ryr6KkzgJQse74pr4HC5HXBAPiie6cMSd7E7FjmLLJftAXuxGWxYhcKygUxhKeBZ8NzUT3DFqZLi4P6Zq671",
  "key44": "2qCFJfaWdiMVjwXFKFwnRDJChfG1G1txVadaELPvVEVFZ1VkVPPZ5ncYQxBiLazRXWh8KFPdH5zUWaTq2rYsQp3D",
  "key45": "3RdYfHQzJoRh6qNiZza5XvGKAxBUbyJ4HJzU6nenRuS2vghRt3CXbaMgXeC8CRUD8NvHUr2FRuUWJ44JZJWMgsZw",
  "key46": "4PL8CjtFokdaoDTCT11mZuWmPEWozi4tMRDfzNEvGetxV3SKftGsuwHM8HkhrGVBDhmni1xfvx2diJVbwssyctEB",
  "key47": "4jJM9A8N54w1bTCYnYZLyZdbnKAEsKsZRCSNx13oZuP9MBPyfQKkYWVLhjrYjyDhjXa7m92B79KD8mVPWT48gL7z",
  "key48": "Kf7W2o3dxcQQ5tPTXdrDg33W8B6ZpHBFgXJQamA2NmvhFbf5kXBRGmfnTiptcRKSZbQFJRuHfjVioX7aq5ydozH",
  "key49": "2VKmYyxPCiHDVAyV58gNag7thHtgvJyMTb6HyrzJDdCKpjGmNctmCmY8xKFk57697FiCpehjLHe6Aqn16skegJAb"
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
