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
    "4LHVW47iePhpLBWmK3Dd5g2NRBgVc2SP4TTkN6UuxpcUFrc64gZDfgLcGmnqgVc7L6gMWwmnx5YWCDCF5kzyiPVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ki7SXFLZMVjHXk5cGjNNUtsfwPQMFdNrgBT6zdiLfU11m7Mn9batLsbiC3kM3VKrbkxdVg7emBDetB6o6dXGCH",
  "key1": "32SziAFoTQMP8pWEMULSzHzHigKU9CqG9unbpyEfJ3LD9XLJm7RAz8GpcEQ6d5P1Utfxr9WvfpZUuq2NdqFnawpR",
  "key2": "j7XC7yWNX4eKa1KMQbufdhyi19GzV8nVB7D53QBacWkyjft4p2zmkRLFQG68e6boqqa41pfCtHDMPCofc9xiu7p",
  "key3": "3KQd5aaGCRV4kjwTZRB45ZBBxSFUwbNfojk8rkLFgoa3nJJV5zzE7x4mVYkJjfcuxrU7CUJhCdpGTMzm67HvuXeM",
  "key4": "43iDmEpf3uAsjZsGET7g2gtoZdJ48esoxMHaERLJUcQYxB8tGQ1UDWWx8GRDhKXB5WWx71pHSnPUCRPHegZbnqwp",
  "key5": "3cLxbHzwf7hiqvaj2hX4JeBpmz7aZVcpSFLsBEQSLX8Bcq5rfX9Tt9fwmzww1dgfHrF2ErxS5pPhtTniNB6EfSF1",
  "key6": "2s1xPDKfuADsU5XCSqim2rnd4Sg6Dkg4bU8xCLZ3y1kUTeCfGkU2zmDASSP3FxKniqUNwUFtmXEq6DmFN7LfcC58",
  "key7": "5Fz7ru6LBSvZQ7cqaM124KhPGWGNEMeoaWVBfDta4oWrfaiy63zdv3nXRaLnbJn8cJPWXHV1ydhTvzBxCBvsgcmC",
  "key8": "4mvQ2QoVFtB236KfT5Fnof9tLjCrigDuFrJFpQHNbr5JSzdH9byY9TTBwTuYQFcSwZqbL6MVYsyfkRHwe71TpVRj",
  "key9": "wHNHdqXTvX1eMkgGkKjz3Uw7oSU72s8d2bARY2W38rik44heVe4pMehHgZcW4axBof7An58mVmMbUs5WJukamcv",
  "key10": "UzCoeqfExy3JRHLGdTNg177SKMpdvx14LGYtrAhtVSm4tjRQaDdHEShzmzp7uWP5E8NqFqSnGL9xpzx9DDQpCHS",
  "key11": "2We7cKhPECvNTpHQGtEDh8Dd73zYc5kyXgZsKveJnMn7qgVV3fn3M69Hn71LVcZkuGK9fN2Q9iHX43h6JWAjxmyv",
  "key12": "39N8e7Jb51vFcBkpYRcsygjmTxVMSNYHM3a64yMbXuuEWagS7h6F8mo52v4qH19uBNqagxT9PfVXwsvwVocHhgzh",
  "key13": "4RTeL8hQNLeW8ivCsNLzWMZeqKRwsiReX6PwT6dPEdWiuERTRr5grsLx2uf6vMEcjYUAyiFxy3ku5cjDixQk9shQ",
  "key14": "3ixVUQkBQFPzDyazsJV57dUR3GjnPV7LC657z1tnzePhrnP2vcWb64ZhfyrwE3ZYtA4n5SrG7TqMebT8PD2CXCow",
  "key15": "4Hbkjy4qEeB1KBDcgni57oExEPfRXKsgbKra6t1ufwNHyVifRnhw7ooePT9e5vvUhmjDp7uYSPJ7JEwMf5UgSpX",
  "key16": "5651dw1rxyzpPYmabK5DE6ADh6zpZjATdLKmpyBvYXuJmpsWakU1LNwAqU12Ks6LFLWohKRky9a8vbEjb7UUnZv6",
  "key17": "gJqeuvuivifihsuDCZqG5GvDuLnGrqUKUAmbfxJKz4MB1XESPLWsFye2wdkoV5vVBEe3t8SheMzrkk2xULDq43t",
  "key18": "4eigQLohoCoqx59WtNadkeSoJCQe6zkdMFPBp9mCtjoPoBW9cD8SxYJXGxn4Mhqq11GRUx56XUUKXu9RtFTa544y",
  "key19": "S7y4sDNDfu4hjWbNicSRRWhEfAPyURh4D46mstUog7jfjHT15sCdFJjZqDwg3vQ5csBCW2dkHHebc9tPaYG5gd9",
  "key20": "2Wue8X7bcPuussUJ5JWPMcGJyCQTAoaL35QWQQH3Q7cinxmfdccsv4EwQRSzAN7HXx31LyP3mdn1nRBUw6ibatvM",
  "key21": "4jj3CH9aFDHyHkj2gr2FCLaqpqqpBjmttHkHDNkvrS7A8VSNehhdtD1fwgpA7ZABktoHTudtv7CVDuVmz1EZLeD2",
  "key22": "5scneuTC719UXonHVQTEuFxY6CfpV1HfPyeuSJSPzaVRYb6yQ7giQTtXm8VgqgQZYUMstkjnBzqG6HzwPe2j6E2h",
  "key23": "35kFX3zPgqZPTXwe4DZomaStsoHW7EvVeLiApZd6Rcygnp7qMhGAfRi72Y51i7GJd33qjo8oFLm92fzaWFFNLuTx",
  "key24": "4HzNZvi3pTSm9hrpXiWpadpAJ66dMnBTucXXkwJyV3yGPfe5sMz8sHDkXMgDvSkRz2qQwDMQbHorCozyQ8rkuAW6",
  "key25": "4yUaEM3kbSteKCmGybzXDve3vDmidoqETXCtw19NFBumUa9YqVbWGt1Wz7yLFSQqtJshQMX1r6xfs9L7UKot24Mk",
  "key26": "4ipU3LmQDEs5HjANS9Ko5ddKj4iMESo4KxaUhhMYRoxnSpEaRUewFdwMNgSSZUUkG928Ym8S65mgiCdwqGxPW9hy",
  "key27": "5CzHKLuUSwB1wGCPhfjx6GEirts4jzL9hhpGnCvzv5v29Lg13MdUhYkMMTXuGfmWyK9zrgJbz9dBX6NgP9ScQRoy",
  "key28": "4nBCRWW6UnK98Jkvm6TkpvXroK6hfKSFjS53U4HSWXpjypJb6qzELByDSSzxsT4sFKazZmRaChgR4Cocai3FL3t3",
  "key29": "4MDTBPdiHLRbRZGzdYPatwiCJEiHcca2vBoms7B2BbEBckmonKcRXVpvrUxwqVBiJH1EYmc5GmFsCmV3WB68pyMx",
  "key30": "PpZpx1t7Puc192cRWJXAw5sc71vCXVndNwgjYHBfXa2ctKQHvzTDHp7ac4Jpw98cb75uAPBcAJzXtDJDx1izMyt",
  "key31": "5RLL8RsmmbQjLow27KUh8rejubdV1y4YxcpfJNSrUU8jRkYUMFVCRjWDkh4GNviwdWqNnLBWBJc9gVq4Hnd1xPM8"
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
