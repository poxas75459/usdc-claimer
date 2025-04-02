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
    "2CF4MF7boH8y9HFk8M2nRFfu5gKFFMd9xP2Lm13h5Ug27RzGsXrqKY9THhU7nR8gVjP4XVC9AZYQSRpmQ39TjtGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LswA8ig98CX1WrgSw4qVfhSXmyyZ5HvV93n9gZbnsWfaWTfA6Ekgz2XviocjpnD2Lf8J2H4XUJrwskzvqsD8Uvm",
  "key1": "4LBAZHvqSDqg6KYCN2dVMiGirTMoFgG9jGvupL4uDqBEgEz2MEtVAuqx59FtixKgzdVSMg1PagTEwabe1vCnQsCA",
  "key2": "kASiGrYrjSJnnXmk1Em2zdLi2BCUHn9CVzPxjy6Mrqy9j5EFviEMW45nnqbHwcQcz94M5RPvsS65UodNCjchq2e",
  "key3": "4FEiFXKs8Ry6B1D96z8X9SHHfQwwbSrqBRnPHMoBD5eNE5BpB9tV8r8wwtU1FA23ux9b7WWsXkozKA35pG5RNews",
  "key4": "3jtiwWRgbAJNDok9G5cEnipZKJPMXz33rnjgf4EPW6To3MEtq8E95pcQa7dqXoUjGadKtkeFdZWvE2vuzLfnDgav",
  "key5": "5yGY2TCWJKT6fpKR2FpgoSHeidx7B5CL6KtWT1MDYG1qCCJTNsLVkegoeXeXjALD4RbaHaQr6sZXixEs2Nj9FT71",
  "key6": "5swtHRN98z2UfE61uiBUJbqauEWoZwNogeaVbrkG3NnV2ewG6HYxUdnP67gr3KnHUckJr7w8h42fKtu4oFVeVZd3",
  "key7": "4ToA64G42oyUZs7iWsqGU4h4FhckQZvADxW9uUhkbBWwMp1wQgtCEF1oyau8ACMuKVjUijNzMdTUzMrdsAxVE1te",
  "key8": "3K8jEiCG9L3YG2gPkocydbrhkP3hshxBC2SsSEdBXZgZHjF8DmD83hUMr74RNrgPcuAJrZCqBhTd3GTa3Srjzjh2",
  "key9": "2S7RwAcFsuwcvYin5VhzvECyMwVZGa3w7L6DP4hoX3kpoSuh7KinbypSakoDZjdvb1dsHCC5f3Ycc3TgwrZYxxzJ",
  "key10": "ef8KAwkNkvM3hh43xqdYcr7v76X9PE75wkuWfhXK5CW5iQpamZLmeLz7rNupLi81wGNvdnxWb1t43Si7wv2TcXg",
  "key11": "3xYEEezfDxxaGiX5EyZF8gPqoV2mMDVPAmS6J8RLe29csRnX26jKh2YjZaYfswXiUhoPPbhgVJjNfbCauzKRQFrH",
  "key12": "5AVSvHAURrU2fqmcMsk9NiL2h4uBrv466gKRotgLdKd1A24be68i2yKExhLhwkrxtcwqReWx2AfbFYCLe2VRhyoc",
  "key13": "54gB7ChaFHb3qu6zBKnjNYCL353ZBMbdgYQZDKa33bHh3ncvsmkivpeXeTk8hztaHB9piujDzndcJgpvxMFDftrA",
  "key14": "26BdszwwoqmTuGzhqNsoeoaCRiFCYuuW3NamcCDXMf6PBhaKGNQquzcpRbVrTQCnUzxg3PUA6YWCGDMU2m2K6FAL",
  "key15": "5hbLELoC89HeNpcLozHWNt8BQRjrCW1aVG7YrwWQCWUcjRKotVFpRnRShMpscseSu6k6LMpv2dPKiHvusTqvNa7p",
  "key16": "3R2m27gZE4iVtfn1coKa5DoZA6MCnWnuvjUmToZdyndq3N95tskTk91FJB31xcSR8oL3Rb6WLdksFLNXD7V3mozn",
  "key17": "2fTXiAZJmNsgPbgQdent2XDfoQR3e6xUDo3CUoaEpkfKD7yQX8kHVnUTKoGa9gQwALrnyB5PHKFZevFdwiEqG2ZM",
  "key18": "41D4Ahp4qHyWQdcy2DbKhj45TVz8SY3aJQjGsHimoTHKqtXfq8DyYpwxehxPWXZpa3MaUrnWTSZmRzhL4sagjnQs",
  "key19": "HZ4BYeHJUSnYnb53J4RKuXJMzPvmYtHDBKw8CShEaB7fNe3dDzxHfSZVU33L1E7vQQXN2DMxsVPyZvaqUqHsSUg",
  "key20": "3HWhkTHSxvcm32UhtuXWDyXXNbcEXYF3tjCP5c5FSHHd9PCz3c1pGyk9nnadJ3B5VdzE2BLGBRHJPbyX5SVJEDqJ",
  "key21": "r8fd5j6trfm1kh5oFTpCLB8cBiaDcwsUQvGS1FDgfx8fyn7JagitPDDrAd9Pay4EP7KXY5NS3krgeAJyss5kTUq",
  "key22": "39sJhGxPQXzDxgkH5Q8hUSo8EvJcVufPK4odC7gH2LQggEi5mUW6djpydkdfFt8fNFaNYH55wnQK9iReYQaBSw1b",
  "key23": "4poJq2SD9QV72ZVt7JN5CKtm3JdF1qCp3xSkXAoT4GfNigkUoZ2ZdgFnvijxam1VwwrSYicHLED1FfWgdY9FcTpp",
  "key24": "3BqRRXenYsER61cByGdLVgRwjsWNp5BeGUoJVo8x2oDoKZZGJUJzghHjToBxfiZDRJazvT1JDGqnjmDTiz1mRGK2",
  "key25": "23CPVChYRoPiLWN2mSxwogZd9NH91AjsinqBPq8PVFm97QJyoBpHbRz3y3s3tMQNhpgCvfhZfg97vx9rb9VCqnJr",
  "key26": "66BKumYdPtMmzpvovHr6UCjDhr53RRwQ1enQpkJN1h3yiVreMiYCurmxiz5WQ7qZweXiL6NQYt7HvG59fe4FNR9d",
  "key27": "26df6BheeMTFcd3rymqtzKDBhnceCpyWNogMfoqnP2zq2atrJj6voayZ6NS6QmrHEqNksz3EKcyaBT2bpE8TJX3M",
  "key28": "49Sn6LFUTjRu3fSdPzTAJvicLQiTYCVGA77eEEh2rHQCsVvQKj7EShVjDPEkMTDk9TE1hQ6arH2GQwneUdr7tPnn",
  "key29": "4g3nNtYn8Z2bDbTXwRsWmSpy2pRWtspyrrhp3nKkpuPz2xj1YuHAHqjFho9PMeKjCiZECB3F7kbnS1XDDvt1XhAv",
  "key30": "66Pj3Gv1iYxtdY9PgNzUdzC9oDE4ysX84T87zHaNVveb3bD6UJ8dfcaG94eMjcz9xeGbrVpG5UH418gx5hBvMVJE",
  "key31": "26CWpncNf8cPZZRQq2JDFWgbg6j8yD2g8vgFMx54tZK6oFjgj3mrNvaM6gdo4cB98QcszBtydaJZSnJF88GkVUgY",
  "key32": "3xVYUqd2dtzsaiLkidqLB1wQJgxGRQ75GnFuF88cdjock7tJGZWTq76yL39CHkvyNyQgop41VZ4piMHrTPvKev8C",
  "key33": "66YfiPyvH39gdzAFzNTgvFQV5idaPSKNwsdpa3RQ7P9RzdGTGvW8zWv2UkWD4JFKgTZP6mSNezVUUXYMUE5wG4Ee",
  "key34": "2WkBYWTTxQ42dt6kbKfKWumkpgXNxk17s86brrnN9PSLC4wwCwLU19NPetR4n4DX2Y8siRNUsm71p92eGUCYc59",
  "key35": "5nE8PQ16yQh6AEknkqmEWK9VzkYb1Zh6BiCzyFrgZeAtmTBVziZvEA1FeJKgFVFbP9yVqVQ3oX1FPKEQYPpEdohG"
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
