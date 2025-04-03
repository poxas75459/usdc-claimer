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
    "4ceWb22dHBXb4c5Fmy2vVFhQNWUWbWDiiKPE3RR2DYZvGhGMsasjEXZLMW4pG5DVhweNwhC7Q4Um75yf3epP1n32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HbVEFnE3Zq5k4Xp4NrfNDxCC26HXxQgxygsuFCJecVSKn5mNu4XXuJgg44Zdw1eRLenqX5UQqPVUociwygDNozY",
  "key1": "An8JepCu9Rj2TkoF93AzQwtEHVGb2fayoTWY5FpAqCCkTzYxmi3NaxqK3gxPwAaE4CDne5AnTPKzP2MKU64i1y7",
  "key2": "2qAvLvcnGmRz7febJBrou9tE5kZDMK9heLCbFj8ZRQ6QJDgzvZx3eA5XUfP6bABPuu1wcLBiQXKi1wmX3GZJih7C",
  "key3": "4Ae55X3Kw6SkM7yvqUH61guZecvfiZQYRBQa6v4BTAwisHiy57JtJ3TY1Hwv4tcDekEXr4qWq2WbWmAybPy78ELe",
  "key4": "ArecQqFErsgtuJoT1d8HJm9oa4WLQcNAGbGGVioLns3wii8Fe8GBzeCnB1AiCeQQFMSPusbU6fjSxz3dmkUqkYH",
  "key5": "3zSUAfDWnYadw12az6TKt3nnVoMRKmeP2yEdBkC38chgoMhFjMAqkdtdt2iJUTGXMgKre4VD4bcqV72RbcHFCg3D",
  "key6": "5sBaffBicgvwGqjAk1HYeQJQNKC4B1T2gAmjxFuCAeZy8AVH2fXo9noRq4FqBqzfaZrhnj9ZY5vP3n4J48rGXtGk",
  "key7": "j72CQ419Jpyko8WtxjkbtnTgLf1EqLumopnMqZDBhiTjcu7c7KXhPB4cE1XsdTvaSEXdLNWn8dj5mqW579dsFb2",
  "key8": "2o7Rb2jtkyupnoxpzJAzghdwcsRKUhpW5t6JW7SW9QkrpyBBriMKGqA1ZnqYTAhicUqaKdGv3i9qTS5EWHVDU2aq",
  "key9": "5hhXPB5e2cUhd2RhU1ivod7a4ErXF7ujyGMq9ujRpUw6PcPJHyqiZdECRQ2KqHG7k4aj2rhix8soE388ihxMVJjH",
  "key10": "4A1oQnwtR7738oWAbuoYT3YyvQuD4PHV19mPPK3c2oV2RAh7GU3oek19rTpTAVitLyRm9kSVsemfyChEukPk2A7J",
  "key11": "2LE3sqM2pBsdQPSajB8dxnBWiGysunFDfaT7zueb7TfDQVbNkbQi1eZj6THWyEvJnjxAoHkNQCpoBYCX9WxiES2f",
  "key12": "5meMBM4XsgUXq8Wdb45iHVQXgCiwH2S1auoKQp11YZunQLeueJfiMvSUKHfYX6EEbBxwmiYJWm16e87CvH5v5QzY",
  "key13": "5vsves2NX4k9b1zWNpjbQjynQQMxGGg6s1FxVMfTSs7h4vVyTA52Ebfgaz482q2rKCHMGAFEhNRi3Hh3SpeAGUdp",
  "key14": "64ECW114JofvfcbNdpdUr4UTKMzZV2qwNvfB18xc3ZdfpThbCKoPGFLAm2p8SRgaSoXniYspt6PatxW6JYXsmKL6",
  "key15": "ziMxARqYS2dHzmyXffGESKmbATQ1nn8oLZGqo5cyZcajUwHQFU1gKa5uEppQ1hFvGgSAbZcsmeTySP3U6y3ynsy",
  "key16": "2bvCaTZjr5XKnVjUE2dpHwYoa2aJj1bnybvEsNFrpU5EX7PZbcsZnkJa59jKZYQoZmnnJp2mXefFCFTZZ3KHziBK",
  "key17": "8hxgNBqepcuToBansj2DQhRk9PJFshBAvtJk9srj57opy5Bsna3TTWAsRhnjjf2xtf4zLm6jfW2VaQTEUzKwJrb",
  "key18": "4tF8vwmpV8HLXRZSFpL6KAxSj4fHK5E9yW8wvvNsWg67VqZSXhBattMRN8sE2u64ygHxLJuwAYU7Emb59CnGV5Xq",
  "key19": "4LoaP34aPShGpfvUZjyeXmTyceXWKWgpRivoxqPevRNf8uSx2MugZXizmJyzWUP2wpMEHDiP8U2aW4GiFxDkG3D4",
  "key20": "wbrzzcZsfyH5BsqnBDjiGAjSnTWmhWANqvcv8yZ3NGr3zTfi4tE5ioQb47pyH7D2UxsYrm7c5K4DPYQAS8sHFT8",
  "key21": "PuJ4eNJSUqrjb2buky5XmuQDd8Yr9YPuvchh8m7NDPNstuUChFzrGSp7AhM85svBU327BGGcpFvUgLqfXxS3aPu",
  "key22": "3uNC3WzZkww9xJPBdgjgZaC9iiL8PqHTmdWWmmuMMto9LsuFK9UJBJonbucaJHiEry1niwv6W3zG9bWKoqCfM1uB",
  "key23": "3dN9m2oRbkD9VJovbHAZTHv6m8pBRKhy1DJ3gnFJA8QBivXQQA5U9XAMjdCTNqbh5eSmFXMt2XdGDo9gfGT6D7Sq",
  "key24": "3x3Mtn4uUFDmiLrqgBma95SeMQ88ZkuVnueK5YZDURs4tSpv67PR2BGhDK8ko8Fq1RLBFxEYEnpMiXaPHoisjBkw",
  "key25": "gkgw6gHSQ7Cm7jG686LvHQ41M1UfMbEQDrHYrkuSFtHXk3ENqkBJoX25HXjcihgHNqy31xvajuisQeFLTyY8o1F",
  "key26": "3J3WTJDyVFso1ZQarZUa64X4XDTXnyszJd1aYxktHMGXqkTrEVkngHu8xpvwwYfZj3KWiAZkDuvvJ8MXvwTaqa88",
  "key27": "ng3Ka8BNK3LswddxVVXzANe4SSrp8w1vXujUP3x4PmJXcRFyMRsxucYggU3v2Xy9KHbXtz822YkkY4Y1jX1VUcN"
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
