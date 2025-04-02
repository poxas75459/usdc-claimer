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
    "5Hj1es7bNLinABGkUWLk7duiX4RSezrqVRR8p1YNqMyAcYE7bEBdKiZLjf9Qt5tPzUri2BRMkCAzwYBZVBSotXsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GSxRWRtMS589XqKsGLr2KFrxjPYBEtnk99DbwjvXV16KJt2PbWp6PCBc4DUbcmYRQW3hXKr3sypbWG7zvkmLwqA",
  "key1": "37CN9voYT8S87JcAeZC7T6rpYod2kSfQuxH58gP4sb1DdtdZ5wxSysa73wao1UVh7kwxT8EK9GN71Kgak1Q5Tx5Y",
  "key2": "NShuVWNNH8bpgF67UGC4bh4zrSkrCVoRJEnpsWYJJhHRmP3unV6pfsBmbwo4ppNESEvPNBU6DqgbtCEtyWfWzoy",
  "key3": "1U7zFBFNiEfkSjSNcyDtRjRaJ5hp7ytVay5CmxoL7GVY588tiUkf2PWygk7c85eqoQdbFP3xuoV4JLq5LMvC8Jk",
  "key4": "5GaftcRoBCnULa73q3VKZB4n4ExRAeiSNHtUqijqydiPhnZTtxDChjVds9gQdTPqiVZ5AwmU1VuwNiVDUNEnMCjH",
  "key5": "4KF8ySYYan9NNAnoRrxreCJhYDqAtTebiS6UUzhpZZaZ6TnAPpGNmtLyResx32z69GGNJEC4mHYqbZq7ZjgL5ZA9",
  "key6": "53Yifijw84qa2Tkodo5YwzgfA3HZZMo2T23DWRQT2JLpvmTW6dm9xvm8VrSwjutrH8hVmtbU8ZaBut6jaj9m4d39",
  "key7": "4YUn3jYFtVCexZeZYCRh4pDEVZdUdPTj976X1e4YpMVUUyom3e6mZkJMiQkfpY5XimqcTbp4WuRSs9PyNXqwD4jD",
  "key8": "25DtQrps2AWqTrgLtLZbHJYmTdXURhY838FPfTDSzmBw1B2YaxCJWH8sPe2sBXz9p1a5FZoEZAiXxefdFhM9YePb",
  "key9": "5cTCy98MJRi77J4UDV8xgrsn26q4aNd4X5wuv3zM3pTTVQbS67An88iyxopVgww5SG2UbPtCLX7wXqHw5c6zxSyY",
  "key10": "37buTfebXx6dsmjwYtUjvqLVCXdK8yVksE2LxvapsjnY4JuPqgAmnSAA3oBsynNddwpQofEYPoHKo5UTMgxHjfHL",
  "key11": "5KnWHtDwdNKj9ar1PBZT56C7YqRC8EqD95HF3Xjz2M3V4iwZJBpaUKFXpchbyRoX6xxAph6Hjyz1i4hF1ZMBoKUG",
  "key12": "3DFVedUyWNyMMzD2xLEW3Jhkcwzd1UwabJrTgBT6hHLme2ddCpLBnxYUYmcosMEF5zBU16zSxQF5CfMLwbDy7FBU",
  "key13": "61fpjfxgbu47PvvfAxF7qsgMkPujdzvSQXMgrXQWgUBjMVrJ6DQNFfmWDAZaiae7RTsrmSYeWh4wsVPCmLdGX2qn",
  "key14": "voswXzJHtjyLkSMnDaboGX1XLRVaZJDWcChxNPotVDyV1UqFJW5d1byt9RakMk8iVXQHi1WK2rbD952gPfippp9",
  "key15": "2VVhJBe8hyGoqd61R9MTH4rpVZM345Z6wtZUFeVeJiE4sSgxssuWgYwR8na7jS1qRQULYxRFGbyF29o9TiGbJ1pB",
  "key16": "2KymdabqA797NLERDq3eRk8E8fuaEJJm9sveErUCkMqu8KTQUHXrCbquPoD1tmeHEfodkBKnWMJLPj8hcBt2mwuN",
  "key17": "4VPvT3gw2crfJpSwuyDTNCtcfmajxQmmpEruS4LDyVz6GkX8QusjwZb3esAuGUQe9SC4E5LyvhE5VEPPv8oTjVch",
  "key18": "2YJJvfHnzKmopWHghuXrnMuT6NwFunRAkgAGvVTC9WAMvMqhCut1WEfjrYpEXHfFmbL3fFgX8bTqWqwGYTH8vXvW",
  "key19": "3YKo3BdqofqJeECrgeXBybNnEjoqfjx4EqAbxonC1ASSdMhx9XnvaVtprGUwKG5UBqYSeNUyo5JBQ1nNp2mXhPTf",
  "key20": "342czF7CvA9juQ5v5JCPEtBxfVELhJQDfm3gdtvZNJrNUWUY4U9mLtBoqe6cdTiuZBMTLVHWq6ys5Ti1H156BK2F",
  "key21": "3JgBgvwnxdtYrqR2ejkS4RGxQTgGxCYeJnuujsEVLRnaYFCAo6j9oBvhoRgvK6VnAWKCVxihGJwEE9N6ZHuT6Ctg",
  "key22": "4ijLyHeK5Q5Muo52fCiD9pqbn3ZjFvkqVJaAsiNF8VWHoqJqjkd1xGJJmebXivZgdok7t9isf6qJJczHmPp1CUao",
  "key23": "245XRRCb5hjZLS6JV86PmZ3TkcmkED6CZe5w1rRpBmbrobaWrczYmgrEoj6h4r25Zqrzr3NCgLx9FDrkXPMxGFgY",
  "key24": "4xFtyCpqqCLLrkY7GBu55onVJTTNS99oXJNeXwCW917Zm1ikM7Ar3CGdv1XjdGgxitdfjAXwN67q6mRuB8nVMBCM",
  "key25": "21941Jb5xs9C5w3goXnctKVKELqGC7qPXJNHCoyLkGK5vSHa1pyhPkwLTEqu9NU7QC9u8G1NNohSGsxpufvkkzV1",
  "key26": "5z836WwdaLD56ZiNMxuNqcnxpDLuT57AcqzTfZ8VEKVXPgYKs6tkWAXUfoeTMT7jRHGU7VLbKqr4QZjXvtFsaggB",
  "key27": "494qW5JvAYBpySLtr2M2tNkgmPmuZGV4pgeNau4BnYtcKMBT18EU71G8ghdnKtNBXkyCuB3nwnsxbEJpJBk9QKuV"
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
