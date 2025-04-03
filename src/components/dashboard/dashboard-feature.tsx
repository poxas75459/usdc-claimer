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
    "jjTkX6gggAw78oL2EEnJiXrp8WGtC7MLwPeuM5Muea4zXUkKuWv5JwMpT41YSU1KCgA8ygu16BojsuBPjrdtC7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tnzM7UtgWt9Hho7gXhFk9xuJitkLcXSAC9fzEiZw8LeBnirKXvPPCAgH1beYKJmKEBF74mFhTdMphDg2Lx6MppD",
  "key1": "31TadWBUKbf6icu4V6b2TjwPYCPD43TPPnoyDze27EPBPyG5aWSQbzvrZrzVJeWkRzVQGJX3aGywZ755a93k74aT",
  "key2": "65nokSp8CDGJwDacDkv7XD7gLUjJhsf1W1io7Lr7RgRUuDWNgCeSftpdGibx6ginkuEmpa9ZdpdXFNincckZhhT5",
  "key3": "55wQgNR45d9HB7thJoBkmyBk4Wn1M7tspr9Dsak4ok9AKEgkfFmDvfsppyxJ5JgCpQqKWwyJPtYx8PvaZBYrn651",
  "key4": "BJ4LZcjACe2zeCNEAkkrXDdyxzritEsoYoWAAEEJeEPitJKjJ4RsVGAJX2eMDrRhqzJaucLxj1hAnvHkHJvpFUn",
  "key5": "5ESHMYtn67rf9mDBowiDYe6eR5m8XdvU9KeVMwveFiFkhmaHiRnxGKEW7SrvS3jjxWnku9H4kBCMVCQXvzx15aA3",
  "key6": "qyEoZt9dtmFQb6BYn2TRi3N79yxGCt8cRJRuhYjDUVdmxqgPL6ZefiW1WUUYzwe8yW3jLNAVhfmZ1SoD3dKQScL",
  "key7": "4Y41yY1LmTvJfgsGktfiG4EC5CUdqrUJwUwubGjX5t2joU5BJz8sst5YMMyNwfGs2geazonERXomNP2o14Z4kMuC",
  "key8": "5QmzeZHvCWCJnCG5HP9eWGRi5oRd6rUCoKG14VmZDt7JnkjirShuojBBZS5aH7Lo5mhs9E9Qf16et42cx4qAaPyC",
  "key9": "5NcanHF6xm4jG42URchPHs7wsbVEff1qZybDHgXk3GVZvRjCndBqSzVaDmDJLM9c7brUzzd76BtpwuJVTqJew1AS",
  "key10": "5f9A7Z9pG3m8h3yk4Vvj6nPu6HdQFLCC1uKNaVASMaCFMty98neffq68ERkEzAwGyFbGKeBJGYB621agBzDGsxMo",
  "key11": "22pGYfiPu3Yb2CevmeEgPiCzhrwQxbutDh8VYiTUy5SV5z8p4yBPHUEFjnequq3Z6dCZ78nea7TXaQpt7a74Qxzi",
  "key12": "2DNXzNKWSxgsuX4ukyGS1wi3Cb6u74yK47RnR8bmyPk5REwsJ22de8PZ7CEHnxrtG6UbVyGrUvJGpLa1w9vDn1oK",
  "key13": "5qRrSUSS6YhkMxVXPiFoMxB2UNZ3eaZRZj9dXNcMGSnN58nJQzqa7xA8z3Lj9uqWPY7Yehm854zaB6eZXBwfXwqb",
  "key14": "3qjngNCR4u1uWttqTRMUmUutRiQMn5fu1yYm3S8YCv1y922J18DavEwRTWyc6HLgysNfTTGtFbUjacGjxQ27Y85",
  "key15": "5vghQYw2tA5maKdje77XBkcepykw4VSr8kZhzMPt89wASoebLQR4Tye5qqVvqB6b5oYdg7XUL59WdKGG2PpoUekr",
  "key16": "4CbKi1Vxh15KZgzgA3mA9CAVRDc5poUUb9QLyCMHTSYQCiHwzhXwFtiYAs3t59NYKfbrkN7Ci4oAH72oqhZoPWK6",
  "key17": "5VZUwfCDcaiMATeiqZYagBjgafBpGzQQbjcTVQf6VtkDymtGtrvb5nvBQVvFqRB4mBkkmAp6bC3ZMaYt5ydZKu6K",
  "key18": "4jJNE2jq5ScSTySGGwrs59tNDtQS3vKPBisGd6jF6Lq88o3HnqvwNHBafyFcEmQrwEUG1Fz1dwkSPoGvKdvjqMCh",
  "key19": "LjUvmy53hxzCwgZofA534LwbDCt9LEp2hvkP3JSPn259NP9NfRNrSDyztD78VtoFH4Utrk58BuWvLKUMkRJMhv6",
  "key20": "54V6Y9obhn12h84Kdi4K9qCRM9DySVCTpkSTLHP5n2PHc3vAFsMsVoANa4xTZ67WHtK5c16oYHRQbAHta3vyVwtm",
  "key21": "4LZbA8px8MQAqtkFYW8eAFvHoRkU2Ao9G9F7hLkrdRPPXrDXrNbL1hSMSvogwqAN6HrSXhwhEQgkwK8p1ZfLaDS2",
  "key22": "65Ad5XavzFT2MNvdBRDHWsMsh7QRur3gjU9F6eMjYWei5ftFBDPHdNWoEqfAZae41PoqHucnHWE5BbBWAh1kEfBB",
  "key23": "4S2MkrBGcaq8YkFadf8z8wE6PFwonrWXTQSRK4bsUYEgnsbXnxcirWHKXtcRWo1QEpxJGHvPwxJ5dv3tX75XfkWo",
  "key24": "2URyRnsh9hAWDoe8WmnVvwjU2phV4q9jwJaA3xFxKygHqPhw1FF6cV6KD1NiAyWrcLjS274gdSE4PgNEVss2Wdfu",
  "key25": "5FCnBAkCxZsKw2azAbAsF13ViRsVcy2baT1Y3e9hkhFdyyshe1YFqekTMyZ4e22yHE2HkwysxW1UU1bU9jRQBj2U",
  "key26": "5A9mKEX8V2psxETdXecjfBDqE7mqwpsXhVpFBCveL6uWaFrcB3aXJzS8JnTsBuqmofEbUBFA7nsgz1vGuDf3D32M",
  "key27": "4mwuHBfhUqWXRkCZkp4epUpVn2eJyxhoVUH8T9f7fZr396BwEbKY9XWQQ5TntcCtuDuMXtmK228H8kHFaaYpW8eG",
  "key28": "2Vjjp5dKJuBECSkhZseDbA6XjxHvFNvdyfzGAoHnM2heLPWx3anK6mxy6rYeFq2oUEdGCWo1EcZiTqjT7TiWuWYK",
  "key29": "41yts33XuK8LDTMgmfRxSuA8Lf8e18c7Ks81SfGDjYwac3DbHBTFiHzDfqd8cKbUCZKVeQepjX3BCH14vAqoZmoU",
  "key30": "oQ7mnrfeKxCX1ge7z76itz9eCquCbfxXqL6hU3uE2HwzY1DFp8EZ5yMJhCcPtvy1xNTKYM1Dqn1d2etdxKxdLun",
  "key31": "svKmNKrdtVSVaSgJ3NYeECyoctNTbofgDBogix5SrqafRKGKKdB9aaHfLVvZRXQ8dBr49u9Va8BeWzA6im51DYi",
  "key32": "3epVSpr3GSmtt3oukeWbYoVNtreDtan5y5FgaAw7dWZBJiycb6zNKwgVuhkphQvvWJZWQpyoY31FinY6oCjraErb",
  "key33": "twLZCHSmUNTER1Jb3tR2f9kcZwS2X8DApYSRdZ8ANpDuoruv3Qxo4E7uoJQ3nzjRVmDGGdfbZhZfunCGHa223oq"
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
