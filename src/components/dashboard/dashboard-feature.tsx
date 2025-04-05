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
    "4dihYZgLoHDf7kC62oNiGLNPxfKYaFkF2JA42fPPCFWsqHnnk7kQ6by2yZjp9HSCDZzNx6kZfhmhtirYq9FUqQFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pkpbG2ah7vpPaQWRukLfRrZG6jUjWCXpxdRc7BsUu3ovX9RmStc6vGwRgYHjCDfGksXV4P7d3tbRWQMkXizqw4E",
  "key1": "4EqeCrpQss3iJeDeLiRxutRqAP2Ns2DeYNfkoTvmPvZVeabdBESfQCFRdp85RnTJmpr8uq4d8afSTyCRsVUsnhVd",
  "key2": "4C43zuQY5smXJGK849gAaPw7L2SaZ7Hj4YuUnagJxyCiHSt6YSEoM7MmdsWL7o79512YbpwHrmkPhiW1nUgU17nM",
  "key3": "pPxaWrpLn69UJMCLmG2gweq3ACTkrHZhRG83av6TFqytVQJPuayrFYX2q3o1pYcQE4Jni2Qxpfw3FpRuFsfWkWh",
  "key4": "3EsXGZohCBkiCCnk3sHkr4pFG8MaSXXYHfubE4xwD1HTiLKckYdg6NRuH8ve9HwddypLULWLYw5vUb7Jfy5AB5oP",
  "key5": "bAYWaA3r4K81cSXnK322A352UPq83EzDJF4s3JRZkXE6yTPzhm4YeSKwiBPThLn1KhmG3op6MR4oBZNrXqcCGMC",
  "key6": "5DhZ6CZU6WX9ncGHK4GQd6bvbAZBoeptcj42BSatuADcmHQjtdc346ofpvkkZWsMyXScjRvKcmQaAEUWv1GJBgMS",
  "key7": "Vbt9Rh61Crd6LNEjws71eZhsUH1ei8yooEAsAEHAMwzVkajFoMa44LMD3vBXoeyvHvo1M65smJbp7bBoHGmDNoE",
  "key8": "2gxCgL8jAnxAvdqyvC4SGGi2FC9UUgVBECnLSfhvT8WRfgxawgj2nR2A7fPwjp5Ech7hdd1Qmr3bxzgmC4yPYSUQ",
  "key9": "56T64GP2W2Q5frsB2wBmrVpKq3pBZcYWgKBj9PSR2QjmfjCVJVvdFFGyhsNZsftMyaRbYagDHCUSNgMeVkE31Ny2",
  "key10": "496GDRVWQDkUJ6k6FgnSYVmkW8ETSFSJwQVUuHYLZmcJfuAk338H43fu2MHjydTkX7EVbGeFJGuZGGKprhfLRsF1",
  "key11": "5zs8X7a6sRF7zgsRfPWETUpWnLEuwJmXJbrtkn5EK2m3bWfqRNQQgbmvTnAgXoRnQhzmTpYmz7YURyTRxsMZ6Svg",
  "key12": "5T2MPu12vH2ws3ddTesgBXtq7d6xCgFiPYERDUpig4HMdL6CCtBisiobj19N58uzyEMB8mGRfwHvKdJWM8Kc2wMM",
  "key13": "BLXjPWJ8NwjVYWVwugUSYnn1jbXxadzZ6oNc4V4spWo3Qfje21BJrrhprtZzoVCyXpsX9DuYPZdK1Jkf6fccSov",
  "key14": "5k3i9zBiqBkvn37yYveL5cs6PSQqXZrYNouioRaiJVn3oarKE74JgDQUKqHBRuyQ1g1mCSeHrEvnteoZZXWZnoMP",
  "key15": "3HJeUkNULyWBHZAaDiqiGoPDYbVbjaGKhBKe9cwVP1cgDaHdvRt9nTiNxLgyeTj2F1xa4HvNUyszxL92DHaVWTri",
  "key16": "CZTzh4d5i2TR2vVa9QWVsq48t8h8E9fGVPuBpLXFpS8atQ6YezirzBUDKMXxqtFAgZ3Y512LVVuSuiyZeiAHxtG",
  "key17": "3N4j3kZNMpmXmQL5sytPSnYLns2Njh94ZyYmwoSFo6LXZt6ocA1HrS4TqvM7hgxrPdvvrmudRGL5DWpKkv5zkv5d",
  "key18": "4EjJNNoSg2cTxMNvkTpZCTBcRcqBrwyo1TzMBrfVJLy8p8u3SxKQEpr6yYCsaW7xWwJ5mTSGNAjFxQLSeyQN5vYx",
  "key19": "38iVVJhE3UKfMyfuw51wXCGW9eyetRX3WZSVF6sESfXLrcMNt7gcf1Yu7EJ85U7suTtBPvLPAjqskKRT9uXswvE",
  "key20": "2jov67KqJzKjK4jPKScxzfivowRSbivnHyG9gBWf4zCQqVfFQT3cj6TuihJC8hJBwJZJ5w8Gm6sAJBiZTpsx1LLm",
  "key21": "3ae72znoJjYsegyMnK1pakBmJG1gEuk8thxywD9afSB7rgzJqmT7d1Uue72JX8pZiDxLXrQjmZqv1HKhvubKmMwy",
  "key22": "3rUB6eCWJ1StVTQwDJCY5JDmdQHgpXv4THK6QCDErH29sPxkmbzcgqsRHBNC896HuwXviAZuWLDpKM4bNXcq5XrA",
  "key23": "3h1RsiUk54cuVdd6zM9ZUF4NCGnEHXqs7NLQpf4PxPA3r9vNZKLAnt7AhS6mn99M6AX8vpxhkxxkxhkaWhV1b8Hw",
  "key24": "5r77dj9o2WiuZhURXwtxWCvo9743br7FXaZKb9LFFQd1FYZXcRe9wa8XqKsdXKoi8z4RMLcFVjX61ZGWthWYnFDZ",
  "key25": "4nhga8jEpcFfv6ymtLa6XosDmLLsbSfiB3uKDRRFzq7Zac9d6hMg4SKk3CAtxTdckoE3MzgXQm7ZiNA8CdMAWYSF",
  "key26": "4e7JJjRU8BL47wgLTYFrGnu9qVyqNjFifv8f3ixZfvJadEESVKfMPTrX3zpx9edAYxerPK7E9hRXHFZrSNFtEFVb",
  "key27": "648WyzrurUuxYQ7HowLnSnqkaykh877cgzXg9coB8FNS31sGJJqtd7i48Wse9T4CtGJFqoTzFSsARRq9dTatUv5d",
  "key28": "2hjtHhtF8iuJ7yubQ65uA4ESkfh51qTGSSpv4E2yUpdx3Zyrc47df5sFkoWJrmJCYp97XqHCsQjjYibEPcS9zBqE",
  "key29": "odjtJDpXGKPr1dBbLCXfA5vgHJrcbXcVzUFBBkb986mEH2GarATkWRMGsZXeS8RiKovPZqMhJ64LbW9yzrcYLhn",
  "key30": "5AsSZAeFF3SkHpPF8FcZv33QbpdAkzmLMfHn3pVXGAJyjEcTks8ouGA6eYbyhVVfqzyjuCw9j1NnJczZSrwXbwqB",
  "key31": "3nktfkuKekTHPw7WkaYNtusBifTwqWV19aQEAKtedmbYMCehLAMDhxWodgZg66Qf3KZyzwyP66jfbBso1q2obwzd",
  "key32": "2m2qP9S1v14vVPDNpHRgDuMwL5RNGJb8nLXDHaQqyDCsPBSRgCbAYUiuGnNp9RjiEiyYKnLcfx6cYmLwGBjdBqY3",
  "key33": "56vcqzVmQBUASC1ESCzja33oftREkXEpeSU6cpALvNepgMNihpCu7DEqhG2iD2sSo2irZ4teAgRygmTLAB65Ugn",
  "key34": "TR8B2YS3F7BVWyegqaHBc5aRKrvkkXxg86376XrfWvYzUDfW7mmCXeu2BX7nDY3r73SHZj5S4AV56BzJY5HfGWc",
  "key35": "eT1JTpx4crYR2X115qPED9UhzafDEZF63eFcJrSngS5SW6MUyz11HXdDZuFFNitYWGohnMZcsZAe5GEHLN5rUig",
  "key36": "46magZ1Aeqxfyy7h352tz4imuaQjXECKZWTCFnPY1K774edRWJPKncZ1DcJLtjEjL7xdjJL1RmRjKsL481AcNpEC",
  "key37": "5WKNwYkqFXRwoFDhoPEF4QDvkyrDRgdC9Q9BMDEyC9HkGqJBuZ7CMzCx4KDeXWL2U8jvZn2EHyx6ahEA517a24rt"
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
