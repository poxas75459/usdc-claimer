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
    "4T7StDNvFBAbk9twbqrrRzQEqrehnHAJmQUVVoqyUQvYsFyJYPaudno5V6Dy2yvuFKEN9PRGTzeNQvtFRZHuasM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyZiTB77wBH8yEbuC2tnmerY1bDCcHFb8ZhLX2qfENK9i4eVs8y23n9NfEnpDhw8oFii9vtwgp7UHGLCGGtoyth",
  "key1": "dF5Dn9yfT6bCz1oVLjMkaS2dNcNqLdT7CQ3kHZ2VW7GVJPdQSqMui3vWqZuH1wQwzHNDC7mgKtUrdd8YcaXhWkY",
  "key2": "3ur8rTbxurc2ZkAEqE6rgLvog8AjqNTDk5n7EVUYTtod8GjeK3ZchdBTx7pY6p2fG1aCYCf5ifoa9SMMJrhB9xpS",
  "key3": "hLVwdtyELaVgMNsVdWavCPVxhLVcxkeK3t8a2Dr9mUQov4mx9Ep31BsBp6kjwF9oqmtCqKosvpmUHbiYGDS4jUG",
  "key4": "qiaVay4dEK12Uc2fGi9Y9M2TTarpFwPrJR9cJ6NomkZXZojoUUu5DQqxq4WohVF9gjueNebBqM1owGWutAxbMyR",
  "key5": "5CiBSD2HTfU2goxPmehNMYtC1h7adcpWMnCW4GqMzrgmztdtggMoDFGDhsZjVz6JfXSsMn41sG6dLoBZhqqMHGx7",
  "key6": "3FQ5ecPpVch4VAtyx84TA7cHdfH5Cq6VfQ13paSu3Eisw5AJYSYfBbgWjKLaeVGcopoQwoWK2z9xW55rGsvzCWRE",
  "key7": "B5zNg4F3MbWeE34SGoZe3e4trAKan3FKnLJCA746CMCcFM64isG3mvTuVPfoVBKpB65Wu2FhYQ7STxZy3D9tcze",
  "key8": "3unGrVPX2RgJd4krXY5fKLSqjDFTBN7G8di6C6F7LwDJYZg6CNRDxmhSTRwRnyuxR8zJW9LHH16UUbipEGSTaUnV",
  "key9": "56fQRjdF8oC4bsnP4t3RgE3DJEKKQetiU51tePn4NvKSUDAdjnRpsdWTGejLhmxzCZb8hE1tGTq6KJUeLmLC4EsS",
  "key10": "2gMvqqDkmDZyCD3bQ6gdWPV77ZYx7QECnrbyDXfGzJ41TruG2XEsyv9CfywBPwsDsaYUehAN1xUFRELjUnzzruRd",
  "key11": "2GASFSRiBqNVYA3RQ7kp997k2bQMUbKrjnhq7jY2egJYQPbyCighoqSRL77PPLutY2H4YdHfDE6Yte2JQqTxYYQK",
  "key12": "5qgh2BZnaeEKVKqKRGpEeYoYEuE6dhLgomwzU1E18i3sZpa3whEy1TCyTj4V8gXRPpz6jSuW6fy6rz1ytNjccbe4",
  "key13": "HVirQAFnv2VSem1A2bRww8RNysSN6NX6uNtbrHiNxQmi6ry51sE6pnobELBnT6RXvQQ9GHwNVrBKmAEvXaAgFT8",
  "key14": "5jez12X398yJFtadG8YA4QWE4t77MypqwDzEkNzAXJAgZ5XkUehynqWuGHSfy1Fx3nMxKFVQ2XvcCnFak9K55YtZ",
  "key15": "2xKQNd6VHCy5ebd4ALAYKCjRb6BBdQQ3ruBGeNf6vcnWRQRhYivLLAVVMhQG83C7MKs9VRHJdRScLNUYVnREZJj4",
  "key16": "5YRGqELiwwaxTW2s28517G2s1vpgfYurkrnCrFrLHxKFgtKtfqrViiZWYs6wwXmHnm8ubzTWYc3GaGfcPgmh7av3",
  "key17": "5ziyjTuWSsKtKG3ZkPqrqnsVY42YdmQ5qYLfumoHC4J71UuGzMf1qSfCASqXS9aWadABsUbbopQtYgPTLU6UHPLy",
  "key18": "5ceXgAwydssAgjoK5UW4JjQS4ccpD4tFZwWQ1GwzTFQu4V3UTSkfdhurnXjH56Nuz6UeakUqjKgy45gZWaSvN5ny",
  "key19": "4zjzbUCk4Ts5WAHp9Noyi6dhgD9m62SRKXev3tRC1QREGdDjxLRbqHN55jmYNUNzeoz2ir2HP2mL3vCgX34cs9un",
  "key20": "2QSc9np1pNHiPVhxh795aWiAnkcwQJQG9nqC1hj3dPoVpVELwHWburWU3sMVX2RDMVpGSHPEC9Qo7eWb32KdUt1B",
  "key21": "4ytV49zqZyzYgGKUdjwHAvEXp9k23p9aUTKY4dKb9dnHqT4HUEahduGPh89nehNvGrvLu4jvdGPvKNyfBKv7ngpF",
  "key22": "CPr2qYBZ9T847RJaUVXNzy1KpZfpqLvm48pW75xNo7xnebGVFFLQMJgB5rZCBnn4TSzvkBPUBxV8pqTkPuJCpCY",
  "key23": "5P1whcRUrqaTHmhUNTxhLm6mFKU7tD95B7BqvKiLQo7TfVRv68miNPTxfn2CX78KRf3rW9CY7BoPB22FQ9MCAjB3",
  "key24": "HBnx9aH1u1PKgqRtLzAbA5PGz9KM18aqiZMZJy9gpEN2ombmpHrHCzdFyG6nbuBwDC65iGNdj27YorrbkWpR91q",
  "key25": "9zFxXpppxpdYykMUFxC562AzB2J7UvbA6L3cJ1YhuDAZ9zcvvKazqS2mp9hAd5fnqbLyUjiZ1X4bga5QptRx93e",
  "key26": "5yaQmnSPhmsnJuLJ4RCK9J1T88xHe2czCpxDyGkdKndFfbVJ9VYmw7eaoniY79CDqJboC8Qed7nYtq4zEjSKGas3",
  "key27": "YqTqSVJU3jdyuyoSipTVG4Huz5tDsEgHrUu4eiu3crkx9s46q46p5cKxm68pZbwCyrf9Ur5saKmMw4rH3faUoVv",
  "key28": "4V2bDodrZdAhXq92pxC5NPRqe4DmjXhkk9UTUZasqMy4fQQsLnLRMHLLuXpT4YdqUCn8CaoeRwp2vBZWyMvAAqps",
  "key29": "3kchRiGEnr52stj6Q2ApJ3joLc89WusMZnDWLeDDTvLndTWtkRaVT7zumWkYno6GMBKq2qMtwLGQtCGHu2n6ZCET",
  "key30": "5FzJ1HCNpCrXzZHVJZJtoiBR1ZsgDxSina356s9dA4v1K4Vx4uM8V4EYn1zRXKEViZCoxYiDEysW2UdZzzTxLXgU",
  "key31": "4XZtKy2Fbfg1GxZ2rbcCeAunTr9EQcFTPjbVHKDytydFJWh6Kycd8Cbj3DYbyvt83kT3nqpSdhkqHy2fPx98FGZU"
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
