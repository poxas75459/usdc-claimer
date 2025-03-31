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
    "4Vxsz4ebSu3yAZjCgsox8ik85CysCnzCWHWbwZkPACJwcJmvWBkdd8fvRTjXmWQ8hafJaCq3Qb8aCBkb9Q7PVM9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2cKmgm6484PWXEqJhes55GUFtwKnTBzPRUh8DJvmw7JEN2pRNo651rzwt4RDzmo7SUc7CXeJJA9x4z3nJsSo7Y",
  "key1": "5WfhoeQXjUcDcEeDEsbZ58zxnkvMaqLcYeisAJ6ymyGz4jQ3Qe9J1ofNym9qnqTCe6pP7tbTPTotYFoPn81cxdmT",
  "key2": "mGDcPL5jEDVME9v2uzBdBiTGByZv3xQKModJagtQ7gM7wSCiPa2BeFZb3GGWiQivKnNdnFwHLyq3enAGtpWeKXw",
  "key3": "2YbyLXwqhXxTFX8sjDt82zV3wNrNNovcmjQkhMJHjQ8SFzhYrPZFiubMrM9dFGhxehVEoZrHpFzsAchKD7RbdQLC",
  "key4": "3QGqKtGKQo8qs8vHCdb5FrrS3jF7YbWXngGV3Zhwnqs9sMTxjvi5ea4WC9eqJWNifUPaQ7fNTeTVEfsU2AT3ch8Z",
  "key5": "2qvbPQsNmjULsk9pdKT4FAKuox5kFeHiRsvGXqMAbuBTsi9nkufk2Kw2Z4fqfxkQCzHT9Se41npYAnkXK4USsxdL",
  "key6": "7n94sPxH7qQ7PBkKRoQh13CTNZTksgKX4vDKh7th8nUQNN5d4E8UQBMJid6ieCDKkP8gnT3GPagLwqmkoUdYGYS",
  "key7": "VebJSiSrG5iQhSy4mFMehBYZZuwJi2F4b9QinXC1hw2Shz8btydpRqCNdCbFZ4jsj5qxqfKkyRBzALsS6rPtK6r",
  "key8": "3Zc6LzCvyrXpViWsbMzTXYSfdwX8Jw1y4PYNFyeQcvMEQ9B4vePLHati1EQZ891jJowGr8M456qtkiUAJt5SsFVw",
  "key9": "2peq3mamuXdtZtbUK5wQ7PUrbc7mfbaC5PRGHt89ogGAPHmZ7CMiCLh1ZhgEVshGQj6H2qzy2XQyZ9a288HBA37X",
  "key10": "fS54Cfwu62p4h1jRAsGW76JRnf7MBeVKoje3Y35dBf4MWGjFGE58cLQsWv96b5m991rs2xGX8QEFxq1BWJNapUb",
  "key11": "3UUyeUPiyhB4iRs7fXhheSZK7ic11orzddhS89HboHK1Bu5e5N63NSuExMUYW9Gc5jfYWN6SAaCEXS4hrXCzzqjX",
  "key12": "4S4eLRct9GZz5mS23JYHMLwZFcuipYdVaDbBEmYqXSeqc7kTb56uAELrhd4hVuuVfeZiFP3T6S84RPsijac4ec4k",
  "key13": "5qCMdwSFxPbEbizRjf4Cko71QfLRV423xWGJ5cxdUGMRtXLsYg2FfdumYPA55K7N1TaAZRUWpjEH2WZjAFBMJfpQ",
  "key14": "4Q3p8za8Nxb4RHH4Hw2QyktvEtRL9EWMD11oJPf343BRwrWaewLkyzhRRrQUQ8FAB8eebmNcqDdjodcFXN4s5a4s",
  "key15": "4oG7K9qFamyJ7MZWfb52hvkw5zq26YQFx7LpF8GQwyhNsFN4jGeBhQBqTuWbx2194P6RPiDSV52FdvYLApEXogWp",
  "key16": "67AtWJptjqukdANf9hJeZwMAAzZn7ACfYprvVz5xmMh2Vkkkfg1quLk66AvGVGd79LVcpnkfPft2aizGCDEgc5qo",
  "key17": "61EnwChJvm9zmC2kjSQKqNejeZ8EAMe3eUQRDy1LC4VEMGR13sdR2RB2cDEHnq8q6Q7SDRJi7Xsk8KBW9XcANJPS",
  "key18": "2n7Givfup3LxzEs6Kr1bk7xPW732JNj6dRmpf8F51oGWnjf6CrYxbUQf4MJD2uhpdMg5nDJnRWkUMwZRQJVBpERw",
  "key19": "xwPuKs84DLo7NdFuen5Xww2tUK6n1Rq3JoGkdqZGZput8CzGBD32BMmunmaMARr69fy16KeQUDoQPCpPXbox6PM",
  "key20": "HtMm5VBtrq5pBugA6pqnyRDJcs9LS6E7MNQA1PZeHGkJKMZVErZwoRhHU39o4xTzfyQdCncp6egKRpcz9kNyzba",
  "key21": "s682k1b3jytL9gb7tsrgnT8okjCGQsJhWbv4ueXvwhntXGDH58WhDKRDZK5DuAhAghJ6XxGkcQFAo5kFA6JPw51",
  "key22": "4iU28fJGv9XHsfK4Rj1W8r7wZEYuinhRALfk9WBzfy2UBQVaptxNwwkMnPfsztUkCQRu2KmB7e9vCveMnhD9VMBp",
  "key23": "3XJz8xwDtxAKF3Lqjt4W6g7VcFdiQ3hxdpJi6UFUvRGWw29pgLVsf5ibpRS8vLPdm2UXbsEie4M8iRznzpL68N9D",
  "key24": "2nqaeqh5MQa3hukRYFUQWoxxhRqJrQ3qAAd62Vjk4icdUFs5vCEP1kytdM8NsvWKVE7cHmsQEAkGVKrCLyrppFxF",
  "key25": "48yAQBx2SFv9W4m3zaDSKJTauQd7JncXCd6r5bCfxzT2tPLihgCvUeGNA7jvSXiPSroEp3BsySgbwW7JoEqnJM1n",
  "key26": "4HiV1ZJVTeEYuU79xPYcPX6yVrqjXu4XHidHfyu4S8Hqhmn7kDwR7HBTsGeCUuLpPewiV2wFL9UDSpyXm1DbZXJx",
  "key27": "4QRAMJ2m1Gu9TsB274izRCwgAcaQ43hvaTEY36XMTzvdNU4QGGLTXAPGdDE2WpikZPG1ZjJYkqwoEpZY2pzGoRR6",
  "key28": "2GSgtetZ2acM2oLFKFnoc9piYeCecA1pV3pYWCJ2y5bZ9aeiKyK8tU354H7oqtUK2Jr1p5TjFWwCqXg3Le4eS6FR",
  "key29": "2JQQKZ5amrCAtsjEp7VXDaznri2EH4WgaXa1RvcJt3yAgbmUxEDAPxkciRwp8NHR5Lie69bYMzy1LEh99bqcPcGR",
  "key30": "ELvaZGKUHuD3L7jcDgJdZ2jXKhrC4ZJZ2CddvUAYBvzxuZgYXuoqBhfSU4Qx4fLCFuCfrCi82wLBLKBcpsNmFQB",
  "key31": "2F4vAGmui8KcaZjP7u8aVB5qYAYeBbWHrz8rJVaBtXQdmZBHHsYw1fYtkNArLc96aATHGgb5pKmiW6ZvRLqo9arU",
  "key32": "4nnBD5b8K68KbXdEqzzFQBD9m5RqfwWdKSytBWU9Aj7NiiTN2aeSHLX4rtuMczcH4N6KrjKADPdcSdxLK5YrusEG",
  "key33": "2EdfsGW2vuc1Xjnkfpmoe6qgWgUJVAGmnDY28ZhRG8WyGF4gLWQfhzzXA1QK6CUVMJ6Y9sH3CVgyTQYHcdBCcZUT",
  "key34": "63oDJku12qCMF6ZajUkrbEjVy2vEqU6gWCsGEeFRfjTnxZ2qKzqLcB5qubWjm3CEy7cARkTGAFRNyQ7YRehwQy2q",
  "key35": "uvfA152tAEvwVZzyx4GxB6vTk9AtgbKGgcZrCN8Y289mCiCYRk9G4isjtJiVhR6L9FZ21vsftvuG7muMxb3UEFB",
  "key36": "47qAQNKK8ofoZ2Vr5p7pRevsvjRQTkvenHhHhM5zBrh3rH2kjFQkxnqHZ4iQNmkkS67enzqoCZGkhVzuFNC1nt4q",
  "key37": "5wCfbvPVwZsMFvigoN2hudCXFWsakXKFJayoKUCHmmZezE7yno4VWoJGCVEBrNAgXD9eqomf8CptpVsqD5bDpjYd",
  "key38": "9L5ggMRViSfmpzo6moHaLkSNLa17MNMcT7vMNq93KLDcHJA1iYz76av35q2282StVHjjWNYoyxBLYJumD4ZRtUa",
  "key39": "56PdEvrqyHUpWYNXGj3SRxrbgPHGyb9eXVsFE4GWgsf277tqQch9X4VSUqL7FjZcMNdo7eBuYKX6yspoSFdz9NeK",
  "key40": "2DmULKhW67gk9GRrcNeikcv1kVcEoNNRRyzy1Qw4YrwpyNzPBDnXwUsUzqJiJrMVxc3gJpPcErLQbCW1zmFFZ8jN"
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
