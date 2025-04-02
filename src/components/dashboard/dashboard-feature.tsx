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
    "39eLyXx3gRiSyPy5AHcXwA6N2G5FxXuX56ssxTeDhKSgBjPxQxtfP5f96nv48V8pAsu2s7nYf4uwfDBnLmqSGpvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32uKoMFYwn4Sg5V147icee6o8CRnwQi3m1JHXTXDc2v8xxnpLKzhtUvqTcxk3N4enoXmcgH78DNfj7hjd1cAR6sK",
  "key1": "3wYbu1bdL4kZLJkD4s99wwqUWNZCYa6A8tq5QXQ1MjrXjnGirAeRqJoDVCQJ66p3KcZJVbsWGLhzAUDEJ9YbUdSJ",
  "key2": "65RgEX1GnB1sEHuueK9C8YpPCakjXgkhgU6MmhGoMsDNpkbCGybTQsQs6MLnF11LVikMkuM8ittX9KCmB2hUouUu",
  "key3": "rR72nfgLmsCR8WhpQ6n1MsRvDHV7cYaMdRRDpjs7uSrpJFZJbXhR4mEmBDgKMZs7L52pWFpstR4aEB1uc9UnRFN",
  "key4": "2Pd1p6tHZ6A6g227CaNzD3CaoScNvL8EMJB9krMNYVq46sX8hLMYn5YyQf9yhafTA15TN2uq6D9bynRPbc2QPsRw",
  "key5": "2iWQEuU229HxHeRsLeAKC6cgNKnzaw7Lrq5dep3kpjYBs9oVkpsEHkEX5X2rm8k67U5t2YduQRKg7WVZwCzVwoFr",
  "key6": "4AZcNxUdV6ZFQgBnQULftcfWYAfAQAh5FqQA56dzkVqb4QqEzWyS8Z1s79aEYt7aSekoH2MHcipRNqRsqHfqqRhR",
  "key7": "3knXnx3uk6oCe286hmYYgfmULicG8obYG7caMPT5cUucqMae2qJZpRHp9UJCS5VM8JpsndmSx3Kqx2QAqRFWJVV",
  "key8": "4apE7AovxUMw8nQE9BpfyjAjiFLNP2Jv3UhAU64nRcCH9taxLEZZzhV62FAVRF6x2kcaJktVQpnxwEt3D2i5yg8x",
  "key9": "5QzQzDUJzidWiEmUrWs3r4ST3itrz2FLHGmbvo1SeEW9YiZAtMXb9vgs2MJLSUY8Eh1bNAAFzMZTc6t7vRL7Whzp",
  "key10": "2JXViPjQNg8cDt7Z1EVS6VPZdgr6mRZPHKZUkQWRkPUb6u7dXENNuCjixU83MyKNxB5qjtECaP424cYtQ3KdEpgu",
  "key11": "2Sk8aqb9ABHvk8yGUg4EtnKMGR6iHVJQajdfaUxh8msfoNAe9jgpJuCmnWiZP85ixAEpDKU9xVgQGiWHceXCVdc9",
  "key12": "jJB8hHRuQJV3n5KJ4nBKhjK4vxNtq4h4m4EFzEAepxCpjw3WHVuKF3AdFE9ewdg58H7sgutvYCHXgJLHBB56Y6o",
  "key13": "5YTGm5fqF7UMwxsuYbGAptMWqpSrmwD6nb6UppJBN3pTxAtsy1H79GY9gbetufpQt6dFzKwK5rqm7zReA6uhA3CL",
  "key14": "5grSn37stEMkQitKJgSDEdozkCwD4dmHTb5xzGwGDAHVf4DtugbaPF9BN7nEcbshNS99Cywkp5YPm6JpJG4KU7b5",
  "key15": "4qvTBK3GxeYN8sZsqBC4VUxrfxWrSuzJxqQZ67HgSyUwca3DTcf7esRZ4zqt7W7w2XetMjc8uUm84ZPn2JQhh452",
  "key16": "2AxXqUjTiXKbdKL3GzwovkLL6gK4tU38CAQ4ipZsPZmfhi4vniewC2uMYnwM9Wwm1seGkodzHaZ1SWbG4nG7siCf",
  "key17": "57FYRaV7Hp43mPWvn5XpeLoPRFJDLJJhCH4tzrmczSDGUDpdQP3mhBHk4o3bPQH9Ans2XDcF6nTRFQ235H9es7cW",
  "key18": "28c7Jt4w62aHE72icKfe9X1qLikXDtRga3miZFQRUCVJ3nmBkFJjjDcD6iFMLwgseTAPVmMPACE6a8uAHs2F3ajM",
  "key19": "28We4wuCMvJtD8iDejFsd2NV8ECh7suN38YbjVTKuEBXHoj5ARmi6fmPKjX42VNeHVevneEQzGbcLk3gxKCMDaig",
  "key20": "317WoxbPRG4kwZKhFjXX9ugrWotZfcXM7pcJqtmWZyWY7XBE21orHHXo8HkFMCu8WDhfGkyn7oC5y1Z68XDr6nfY",
  "key21": "2WyjJJyJNV2h667TjUVkgJZJbfvWzz5HbVmVPb87Rn1j5ExZmVKdYtZwn4nhMPMZ2YHbVfUj6MgRh6BYxsDh4daF",
  "key22": "5cRQeBGJuWYze9CLYfKeHRAjjnKhmkR85TSK6TdVSASEo6Qm3LqwbTxv3GPmhDsxi9c9sF3LWYhf8m5eKsXnRrc1",
  "key23": "36Rmqmi5ZS3hbcRhdWbAP6qPNrND13rennvXS5JeBJemofPzNFsFrEaa5ZNipMfVHxb3jyNvyddNUcTpxdVWHPhw",
  "key24": "7z2jwYvdpoybX4YQJe2J71ny5ZwtPaMmy9pQ9s7YZMmmi9fWgsiXwCd9ZNPYAP4aQSruicLuaX9o114vAve9CSE",
  "key25": "2iDzKpNFLqtuVErkNATHotvDgNyiggb11rnYS27AKQVYDaeu9oJXfw73PCA7YvFt3p8zkHfhcTsJP82nCDLUZ4cY",
  "key26": "HtgYwuVCr673J4nY5HanE9x77fZPdi6965vZ4jWJdjZJ9uYANah4nKNky3uyoEp5Au5sr9PV9vews2DBHMXKajj",
  "key27": "5C86WySwFtqrPFbHHR4p7ntfYbJ4B6tEy83owYAovX4cT8KVgWbJvSV6KvMQFpHHkLxNkWtHcmLAxZrYemScFB7t",
  "key28": "2jTS9DwyYZFZAvoSuDDKqM65d8uh3qk7qBAGUVyNm9CUEK8RtottFY3Ge1VXyuGCake9ft9vrx6gGqQUPPmHxG89",
  "key29": "4CPWAGr1wGbS8YL5eKMSUBjZgrH6KG7RXodiLBJoWWHJXLRUMepFJBq3QsEBY8vNtGDhuPBGy2KNR1PHxEP8AzLd",
  "key30": "42jnVQDbMWW4kAxWyKq4EVUWFskq5dNsHwGqQtCF9b6GVfoKfbJRNgtHfTawPM4p33G1TPpBZxdLn9XghVRAw8Y1",
  "key31": "NkvotYciEvFNtRJNqR5S5MbEZMtQd7P9SELJ2b849k2uMfifBMHju3obzQRVSEkb6Pt3aMgqCj98Ego56aKexsx",
  "key32": "5Pg4uzBDcrUX7hy9ZPWSgCYkrZmKLTrBWJoZ1uLUe3AxXkgi62hAi9LFR5aKnG78VwKuMBYAgZyeCLJKiQLcnHDo",
  "key33": "kMut43TkeZCd3bfWvnMbkGQ8JknRkd1SVxPZFTrdmTq1xw3shf1RMwSbGn5aG4eJWe4tT8ZQ2FBbVwXXYxX4YeN",
  "key34": "5RtTUW4ZfJNwygrsTdMK9JJnCDfdAXoDz1j2xinnLbW9vT3zZcjebUS9yJqF2aN1vmgTsz6KAneX5TZj99MH95BG",
  "key35": "2wspyiVzRhGWCBqMBjDLv9oSdf1xSwUfgJ1uZua3XU6CV7FgemhVWAT6QTZLwcpW24cRdLvkHxGJSsWmzLhgjPT5",
  "key36": "2cf9Zxty6H7eNt1b1n8szPgQbK1uES9C7W446r5zaKqx7RFz5Phn3qNfucatTye9AAGVarKuaYTAnyjwnnCZsoro",
  "key37": "4BJgxQan8iX5wJGkx3Sj3ta7VrEQkJFwaN7Hna3jxfu2wPjCmhkiznK3hnFDgqwQNz4WxLTzbwBbrsCx1iJz2Jfu",
  "key38": "3AF4qVVXGvoHLcBiiXWXQvSvdpxt9unvjhA562SAYZ9M59XXTV2VTCwuyjYUdu4P9Tz2dYA3TQxZ3vjZpxbacMEe",
  "key39": "3m7GV5fHrFTkEru3nYEiMxLL921fkBQSW3v6fzqxBivNFo5h15Frvz98JbMnqZZGEhNm5822mc6BBVs4GTcXiwAR",
  "key40": "4HhpZNWRZUcjXfiojea1VTokvi9hpf6dQNPeLwbiUayHHyYUyUiR6xh6HLCdeQRyrLB3mSJA5Rywe6fidheM1miY",
  "key41": "4ZQi1Q1wtjTAbZVRdpTvWpACEGH6WMFgJc7rxDbSPKYk7WvH3eBxDYroyR4Vx4sTpEVKJbRMVYRezF4LsUiQLRE6"
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
