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
    "21FKk5fZMfFUWgDppYamAePeaw34T1bvtMm43E6ThPabZ2tvmmArZWt8MoMop55wwaRLdmwCfUVqgybWVsfNSc7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "626MXkFmYQWSM5P7GsEeLMR4Pdbmb8JvjE5xdi3TqarctnjwnCjuMBQfe7yn4328x7AjZEvQ7kkihxjaquB6JMfV",
  "key1": "4dcCNWUHxrqKRAQAn2FDGFbXZdtsxjAphYmDWdpua7zPe4euSYM5GYozamkwFaYcGsCFL2YfwfhTyD7BQLA5QXeQ",
  "key2": "puM6PGMZJemkk2yiZ5cjagSWnkQYcQUD8qbDVy7Sz2xwB4xPE1B1avHprFQChBUwFgJTYy95aG6ovwUiJxJyjzA",
  "key3": "2FkZErgSLsmJ525brWDtw1i5wBWT77tE8uSZvLtSGSqDH3iHiMwnMNULKJoS49qAPkdnAXvHQ84uSeh2HVv3dMTD",
  "key4": "26iCqAJqSJ1SKzzBVrbUdCSbyd6nTRqqFWkaQq3MCCDts7PTBksQbKAiJaSTijoQzP3PovdimSou1qfBMWUMmv3y",
  "key5": "5GHqPE9JXLcVgvReZXYqVxW7hoPHvjayXJMzZfK1xL7ayebAtHKTKyKWv4qtT1C9MULbucQXnkvEqbqmytjdv3bz",
  "key6": "h9Jsc6dofidJDzSCfTFFXnaBAyDRjSUJjany3zZiApNSiLHfEqGyCZ6PShuBkmz6CAH4ZqaCeY2S9nVtbJ2ro32",
  "key7": "42mx7NKMCph62LVKHr3aoFAz2UDb8TiPNoDg5vFS3pdmU2uX2f7oxGCRg2ykDkEfiam5jXxtHkxe9KQHLtrMme6x",
  "key8": "2jgDEUJpQy2TvhZ6QarNV4kkgS7zSYqZ1yZNhfjbXinWADGq1htJ9EJD74ZSBN8mhUxouLCqa9fjmuS22EYA6z8Q",
  "key9": "3h9d8Ua5347wptZ6Vp2RZP9KiAEvQHD8TE4MU7gpaqJbD7nxzvvhUwLBDrxWWtGhYQunmYKDLS8VpVWuwA2BrKZk",
  "key10": "35Hu3apnxJU2qkaTL8mBJLpBoiTeLZ9qozZtKZ7LmgQodPdtQtT9abjuB4UFtohtJ2szujVGWL7hQpYPCkw4Zm7T",
  "key11": "3us21MtjCEhcp65AvuawbLi95VYHxmk14x7zsfJDzzr7aoRxiqifUF5szSxYRCL3D6AAznQjJP9rzwqjDuKiibR7",
  "key12": "2BKCN3zraWsNVVBUAyydb49TLwB5KRVyS27vbXg8iUinQbUXcJk2caAQnxV2feogeKtbkaTGiTXmasLMooTGqZCM",
  "key13": "5WxHwHaxSUCjvAWFf8vYoeSajizupL4pL1TTJ8EZutxKUjHFX8cyQtcJ5WmLFqrV1RzhqNowAikNp2HGEWhSu5Es",
  "key14": "2LyCtt8kreyAi1oxoQ1QngyuNaiAdGuDMYBoRmeyLHado6MUfw1FWRRKAybeKyNbk9zgNUGGjnqY3KyiVwcvtpUU",
  "key15": "3zWhzGU9BXUG3bWiGhmhg525QQnNSjQKuDfiKeZffpbzeeoPPRD1yJgr4EUDYuyrUu1HDtfSmRFVALxGnuE8fCQm",
  "key16": "3DRcEF1V6Q2KKE2LrgAegXr9kcBZW8jnyjyDdLpmuRXrFY6eQ83g3BW7qgppetZiXJyxPkf6LBnkJTpkAcJ7pu78",
  "key17": "xMDR4zhqdbXqc4C51LuULgYvawyh8YKsgrqTtv5Pcp3Ti6tbyeVDLJmxeDvgGVBx7tTLPsNVCSmNMC6E8RnMX4U",
  "key18": "5iB6c9vCQBYtwVf6AsAfxeYbrY2yNVQwtZb2g6F8xeiK257c4Ako25VSJVfNPqLW5pvGE6aVSV9aGTQDhbzL8Frk",
  "key19": "5wmJv8cCYDZsLQoJP1dRg3MUTZCDLGmMFqQBAtxg28YXSgK2aiVQeQyfoE5r2zKUetHyArf1CoPc45oWi627N4DF",
  "key20": "3JUDZ9neUvVDwGbwiHq1JGyMpNcPf1WMKNqincaSdvHQA258e6mTbZ19o4Z8HmNCxMQYPZridgSNhPSLjXhovS1M",
  "key21": "5zijKawXSciGa6MppmE1k2zkuy5psSs4gtRNHDqBPXhCVvqgSea3xH3nDVRCs84jdVkmCbTKisK1n92wnxTz6sVy",
  "key22": "4Zws3fDZzTwpknF2SXSdkegf4UPRJVHL3Em2QB4H7W1bBzc77hT8kkbN5BRnPs2rAZx2A9hsfvtXP3zNbKmQJFTd",
  "key23": "43CV9B361gMgbNFR7PbFQbt6t4qRbYPZdSepk4DkJ3oGtZiKrwZreJyzMjKTavwRj4N4RiZNcQv7Ne9eN2iDUmXi",
  "key24": "AfmzSNDM34xSNrh3xTSh8pj77BqC3w1YE922Wzsc86UsEcStnop8yUAdZoNpy14KghFkbFTd2RDn9TTYeeYoshr",
  "key25": "3j7zajiKCkPpeEFsC9tZzcj9dTJ1KqDYNxGfH3naoqXzahC99KEgeNZXB6sqKU1FGw1NACwshQYhBdq5h7mVUtpN",
  "key26": "2hosiYmamDWidjcujRKfRTmS87wYp5VqF2XTd7xVuu2b7KXp9ozz4XnGs21DP8xpe2PBgTFmKp7WqoYZvxYLveeh",
  "key27": "3JQB5UPTvFfTm3ZZd6o4EEewqdLtQVFSimEDJzWnQ3jgS81HGu63sTMCigjb4PxPNL9wwcSyrueVjYceW2rteKPk",
  "key28": "2USazBkyBzVvmBER7CgKBRiNzUiWLPVR1PiUbErwFAMtd3hVEJNNKASCRVPagayhKibZGxLfriZZ4pRHqn8qmz7z",
  "key29": "63qh1jvxCWuo7KCtqF5D7He3W3RELMyVECRw1MZCrZg65jAJTR1KE4cGu3F2BxYdrCFR9wkHStgGeAH6RTyanfCA",
  "key30": "2eppJzycVCP6HEiA5uoqdyqDkzYJHQozRqDSxBktMHxj7H7RhSVAK2XK2F9EpM2224Pjon5C6CD3NXa4caqv8jej",
  "key31": "3ESvnDBk3U8uECyKSttRQiB5zCjbprD3huJDb3sgCtDYtyYLUYv8vSvM8UzpD9rqx7d7mxp48CzWvWfMtZFdQ7Ri",
  "key32": "4Vq5dKSt3E5NMnTJjpcCsBmqA3R4p4ZYJ5gY8ANDcRWr9TT4kSCL1rFN4oVFh6bWHnpH2wcXPXS3aknq55faZEnf",
  "key33": "3y7XYVVS3CHAA6Pdhk9QacwWTEnoKDeA5kvJdvwDHafb1LFX95kzU884PQD8TWQhXdEMsRAM4tcUXvmK3XL3zwyf",
  "key34": "2nHbscAkj4vEPQyRXgU5xP3CPEZCZEi8yd2GG7gTJYnY6C5a1CBdVbtDagY9czkpxqbY5c6Tc1JtFRbVeuhFVX1G",
  "key35": "5MnmpVB1YbNJnuaeJDjNqsE6XPBovwryqwjdHConLfKgbja2Sms2P4droZpJ78KYMmkCEPHFTv9FpT2HB3QSYH72",
  "key36": "5i4HJW13mkGvUcuZVxdnPfE5AMWqQgoXAwivsRVxvYKDjo2hStMPEGW8RwrX75FVkJZ4UCr1pMW1F97TfRj7qJ5q",
  "key37": "5jWXtZrgJnbvWvLuJw3HVoRKhhZ1n4bchVA1dfJU1KKZRkqY7jQj8eKobKWCokN1ZZWbW7iGvLtjp45Sn97YzxtB",
  "key38": "3NSLXKxYeoeQSKLbu3tKKtMpHLvHZRx8qL9vVG4RtgYm57DkE3rPgHPJLMzuZPeanubvF6ougp9sZmZUmgJdtz1L",
  "key39": "axjaZejCPbc9pEd5quT1LteVLtk4XruN9nAEYxSebavzBHuky2joHAqUrDghFiAt626NHiXwa9ke6bBC2EoHQNn"
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
