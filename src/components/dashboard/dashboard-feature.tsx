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
    "2Xp94hjTTHcQ3F8n3yy2kxoHGUFeUYkTABEme5Awe5aSoSXtsoZRfH9iQBazAacdwy72usUP4neyRd2pcLVKSLUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rp5pW8e2JGDyMsLHb5Ew2SA6oA2dRxQed2NyYtjahZ9iySUkuAGEuwMQK1KEQdo5BqeAiem2y3gf7KamqkfUssY",
  "key1": "4o5bMz38KcxymRMcJuyegPDrgZG1EuZjQEhi1Kiy54qCbX5JWvbaee9zuzmEsjJck5xJCsZXvN57YhKjFMhWtfCi",
  "key2": "3ejLkTUzQ3uELKzzukgihwmxqXgLkcs2g3cfgPFRYU7LiH7B4tqAEZHDbaXYeqEYSCxKdvaveDiGWG79tGZamJp",
  "key3": "4VAKp95Mc9KkW9vodHnrQtVS9Nbg5BpQoCmUCtAW4CHHynPkLvcYN6wMPsdZGr8E2nPjWm38snqknV4Y1SgckYCe",
  "key4": "5oM8yGDomgpm5KVjETDdm77tXTdiHdZHHh5vS9PddvapJsAAAcA1vCHHx3wLKWt8io3zCeaYZVs81E7XHZMNPdGc",
  "key5": "axBFyGnrTW7wDxsUy9PNtnEjVwhuYeMnDnMnG4C6oP2FUTQVkrP237DLDD1KqUjnpHWMkiRoyxn8gXGU7gHeGje",
  "key6": "2x5c8oEfTsQ3kvZpFGj55mqYx48h22dS9fHbR3taFr4FUGggG1zZUn8tm6Q3WtpjTMDci53S9fwMJWgocTJ27ZQm",
  "key7": "5zESiKpkmhSDTgRVsk9QrqBXb6TU3guURDidKSxvVBZdhMpmzMgpcniYWrGGLGCpr1FuoiqV4Ewk91QHcYLaiN53",
  "key8": "3vfoCYqMo6qVythZfZ5DAVQusEgTDySh1VyGEu23a8QF5zAenkrnGJ1dVZ92ankSz1fHe2oUMNNBryXj2vBybwZx",
  "key9": "2mD56exyj1aGZqLSfsiSoDFuabYbH5baKZBBs84NoexU63aaoRjgBFxqKiZxLNu5dPBTYu1924mtEdo5jWMh3Uo5",
  "key10": "2j93gpMdfaQ4Y8WfJbGDfEFUgDXQ7NG5bnwVq9YLuUn4cWjsGAdQgnJzVLpR9RNP1uVMmN9QeAkkLDCnKDnh17MH",
  "key11": "VhcM9vapFn12D5sRF3kdsxEFD49jzaybfg4ZE1ee17CF9t6yLFw7aj2axwmtJnT6a1aZvLLkmmH75v2sqDe2bA8",
  "key12": "x74VY2YKyRx9VaKyuPMVhVEE17a5cFfgS452jtzyr8ENWz3jLnVLi1ZKsCm1hFEPvotF5GvQaUBV3yXZyXhrrc1",
  "key13": "4NSbBDfFUZdvzuNUY4262LZ9PzFYYven3N2JseUJuKEtHowbDNd3noXNCp9aJMtbbmfjRXeKYjpnHf5kd34VUjT",
  "key14": "3cJY2uLWCjuTHGseMbkmrjqLXqoAPZgdYRPCSruew8VaMcRjCEH4RcDW7Cq9naDXaFLKvXbqQRCpjN6skdJYk2H6",
  "key15": "5SiWpT9V8MjZQ6LFcZSwqUd7xZK8vJsUWztQK5taNJbZn4RJJCmqGr4GiRefyEddE1bRbBq4pSymw4zieo91tPBz",
  "key16": "2kCNFrtgmZmedvRVJEY3tsvCd7QdqkiyepCFR59yxLP8fikxxZX1hw5kCD2oZ2kmtbpgg6gELVLBhe7HLCeXcTVR",
  "key17": "45Aipk9D4fufQURKbvLFHv9uojEKggSEitH9tAM1ZL6L2qgs2nukJDbvuVky95ELhjRg6zWU79zWwpTBtALPGKWE",
  "key18": "eavg6aPigYj51vqq6466NHBHz7yHfeFdnv86pwbJN6i9xEUbBR7M8VHZmvKfVEtnkWj7RhTE6XD8zpRLZ6nX8eN",
  "key19": "XYZEPuaNjX4QWRNe3ZQkwn73vPA1zN9ptVxWoC9V1t1QfZ3HYiJnaBbv7EEM3V57K4rK5UmXuCP7kRDK8FY6Gqd",
  "key20": "2ekuSh2HxerakcDQNPDixGc3HUiDBNY3ytjbKCpzoGUAc5NrwbB9xYpL1LkBo4An6YApdt9R9zFrenAiTpVJ3pjz",
  "key21": "4scYpvfTph2svRVW4W8e75AAZrdvDn23c7qHzFTEk2NFxZm5aHcawrQvQtPwjKhpoXftu9hux9F8MVFWvz2xrP9y",
  "key22": "3JmR5NL7uev8NpuCo7mgqSeNbPfZAF4FHrc6JgqgtVt3Wpwohq1Pg1BsT1CtXCynWxKCTu6D2hpiC72zRdGLaDZ3",
  "key23": "2ujcipzbT8kJEQtrQi92m76CNce4VWKBQS1FFwzpSY4ZVXFsRk5jx1NG3Kfd1iv3Mu71HgSB3s55poGU1YFga17s",
  "key24": "2sYfzsbiEdWFFwVX4UYTaTT4EBpwNJV1cCa6GNBWj9uCgAtg2zsw32RBTZDzGqvk9JXfZjvBr8iZU3vbrCKj3ec3",
  "key25": "2gteZp7qC1dtX5xy5Lffg3pBNrZvH4D6GThsKjvh3EaY8JgeGfNYaGCNDJ6NX8iPe1UEH6PXXqcWKdwzEor4Krn4",
  "key26": "36ZK8YyQ8iWhj22KL8ivdTwa4S5KNDJLxbq6MsKLNhyUeha2UGsUfKnErDGhLBwE3i4vvEtbH5s4iBkKpDtUPCr6"
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
