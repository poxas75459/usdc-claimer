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
    "49vpi6T52pfNN3GmpwHSDrbNM8pjVKtVe97fMhgz9cJhAC66ktJFDaDyXgiM6RQeG92vsayahDaMnBUwVa1tQ7yR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FdfY3NPqdC8hghhicrXwEBTq1ewUHqJTUqRNqWXbE7ziKv9bfQwaHhbepmrtkBBci71vg7kDcjdNFAmeu4HweV",
  "key1": "PpPhXCmAoJ2CFwAwght7pgQ6Quq12o8iMqC83vK63hmV3fJM3amezBV9iK891uXh4X2GqoHeKx91gjxRfytHPBp",
  "key2": "4H9HKNzQLU8iF2hA3QiHvJePUspiEVqcfrfqzNUULzdizK9eSk7oc7k2tYJPsA7EFKNeszonzopkUFuR75qHKsmH",
  "key3": "PU5zaqzM4egEQzfqYdmUvtisSpGDDqLjQ4ktjaG5DsUrfuXRhTuV3p9ztRsb5RPjZaFmho5BDGCEhQTboRGspnT",
  "key4": "4G2BhJGjRw8hk8D6VArC2eAtdQfgnQt4U35fbMJr5xWPBKURxMjX6UH8Yub4ZsF8PGURyAX4nYU4VQmcJm3DDQgF",
  "key5": "5bWkobvLFCUVgt45bQoB3GDV4YPDEh9zoA3PNusCDwdjEJEkEmk6QKd4Q4XgCc9tEthfXf4Te1XhSdukHM3S48Qz",
  "key6": "2idnyW6NMXF4DKy6VCNV7UNqECUCDmqXmbywz2qFh9L9DCR6enfHHR9HVnK9RUbbRP7CkRENWiwXmraWcu9P2HBL",
  "key7": "4P3Q7zNXk3xnYDoKSo4dbNDAyrBKZVYjM84mUZkTQqBVxqJCwRsUb37CYeU7mVY8bBCEQSMaVnV3uji19QA7joZb",
  "key8": "4ukhCaBjsNsTk2yXHVLRYtqLUnuFjHNQW5WQXTc875J1zkNLxHpENGuKjFZx1Xj4m7uEvxT4MLxBBUAFJFyLiVkF",
  "key9": "3HS4agQT5omLTAb5pJtovDaZWrAqnLY9ngjCfnJVXDRcAE4YZH1NoxoEBNVihxAR4ConCrEv4PmHqDTYqTkRszyc",
  "key10": "5hz7YXkwRDb9VrPTY4eMvYVhNqBE4uMHAq35skKbkUG3oeAcAzjKwQWT4eYGWdFa854wmam1SSqi7udJwp6UV64k",
  "key11": "3pvnNW9GUfHtG2RV1PtanctgqAVtvNdExio9gfADWA47vEvKyXyyBk5WP2nWNnfX8FEJKo72SynosXCL7Kz4gfog",
  "key12": "52jspDESgacAeik33TMMXGkeE3YL2z3eXLfs9hmHDD1caJPWPEZm73fKi45vGdB7gtgeUMVQSzMsHs23xtswjj54",
  "key13": "5DZr9FoYqwQfE2c9PhjUpoHecM1YV9TboGe7K4E83AT4HJie6AgspsCkgNYVbKDMBwu6NNoabe7gfAFxDL7QguRU",
  "key14": "34Z38rU8stPWaBaRN41ER2anMte9ZDw21JmRno6axQQJsz4eCCnxsdnU1AFZnWiii3EdtR8tv8B656PBExqamTWU",
  "key15": "2aKg8hpHj9zMw4XbNBbVuDdxDtKUHQ6B9McTt3TUmj8GsnQNKe8kfDhYZSpg2YpJN88QFagf3xuXSwWHdte1RQB6",
  "key16": "4Ydm5STvnv4ePDPncV5CB2EbEUMujjCwYZYo3NS78N866jRut3emqJh8eiVRt9SRYD39LLPa3AkSL11QsLV3iTFj",
  "key17": "5m6EsFCxAjN87Mx7Z1CD7yBfRMB46E2D8fFWvpQE1JjsJg1bAfaVHVxaZtk9EEt5Hzk6faTKytbzrdkb5VWDnXVi",
  "key18": "4aU59EBDE4iJj6QEAp5zEggn4M7mnbLNLWRYcgNwpfRFPNKkrGnVVx9eybvRW74mouUW2w3HA1366WMQHTgWTfFx",
  "key19": "2oCqVZZhHtsaRRJzZ35nuN2FiHcokcei51gwHEPjGbLudHEZJjzB7bTFCpwvZgyDM2xS8QNrDJxNbGXAks2vgRn2",
  "key20": "4vseEpwhs2t3gaLSDeXueghnyWGMBWmpQaJaaoh5oEPgKWX1t5LxxsEoXwVt8G7XU7rVqvXXSvbngaa4drUkDPxb",
  "key21": "4U1kV7dDswkWnFxFjM4RJGcJNnfxHhjMHYUo2Sc7wVTuF7Ti9GTxBi84tsqW5j68qkVDRMMbU1Anoqrf5ZfUx3o8",
  "key22": "4bgaeQTLcgz3kErGkrsjtGwEvjQRL64QUcF34LuUxaMX1JTDinpX3HR29rgnyfagovK9pzmSjmqHidJ7Rx4Eekix",
  "key23": "3F5vipdc7CfMxATBCTK4hnfUrcqKketePe7RjKZAh3o8Q5aB9wnmGQ6qRfGXAB39SZwdYR1NCXti6Kq3NhqrQhHu",
  "key24": "3dhFRSMMoLUeSf1c246gqwscZT7WxGSWiqpPYujgsP15zgneHg7TjnBXK6vhdo5jUQAB4SoyPsMHzuckYsv5a2eK"
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
