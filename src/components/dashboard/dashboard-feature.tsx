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
    "29fMWjMNZygSGVnkbq4ZeYr66E7TSTXWjnNvjq9GCXHpqoTyLvoSW6caz5PtH5iMUnfuhDoPs6fxoaBemr4kzh3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrHF7rUQJ2cYX3f1AwYUyxHwUHwd2f3Rnu8owwLYtEUBcQBaWzYaaZKtBLXqLb2s9a7rD38sdSvNSh8mxDBWEDc",
  "key1": "3L7kBafj7Ux2HCpSDpjDKiA8Fm5Z9iWRaPsf5WrHEFHwUDnJSM5RsipBTrRMyYyt4CssMxTTaSU2wZu2MdFrzQSM",
  "key2": "2n9ypAnu4XdcyANEesHwGUS3eKiyRghR1TTL7yWQLHAckfqvmTBeoFTALY4xdxMjicaZX4QQgyutD3NeswZjRSpK",
  "key3": "4TSWzWKRrcHEosEtvWJ3th3NhtTGQNbAW5RYzX9rxH1eB5xitJJMeZy2eexNXhMooJfwZmMNUcJHgi6TnKNfQBiN",
  "key4": "2msSJHKY4JrqpMCGPBuUZK8xJfNZVy58w9QYfJeZ7bV96y7CorcKpoqxy78c1VMTw3j7iyQZohxgBCKocjMqev1W",
  "key5": "3dMtSyPdJ9GMaa4mLhPMTDoKKTJxy5XgFmezXb5H22ri2m9sSFMGRF6pUMLZcD77U6qF3qNgXuzHi83obpUYKmab",
  "key6": "3FAeAo9u3LLVnDxCyeQitfX4LagF5e43TTBvuKVv96UcwMwLo2CpawAofScaJGZtkUXDrArYrqA66T8XVwRteLxH",
  "key7": "5YGm7sBeM9uwRBndwdwUsX1YuN59Dw7mdaFT2DuxqQpD3pP11ATod92yJmPF5K9SaNrJiNMkiCoeijjhxGtui9UE",
  "key8": "57XKJ3vK2bp1oJUaCPfho9vkobFHcmp7dWgT5v9568N6VbBHSWn6Ur7oPvwbrMRtUJiUxfRMEMKN14zKcENJ4BfK",
  "key9": "aSsAXHtYXWTiNc4Z81aWi8FDp1652QckBwqpwVvcvsjmCLXiknNABfzY9t7WLQRmXi8c3dre6qS2o5rCfyzF5ue",
  "key10": "ELiejNibwH1FMRYyZnKX3q3Np6EgKBhAmZz6cLgQBKJkP41MxFubzRDoc5vzSDgRaSUHgnjMuPR6xfHgUC9jrFH",
  "key11": "2AYQinh4u96evnxMyuXTMDMb38KimWLaBfL2LkiKUqEa9vBzTjdwSGjz22BSEjs6ABptmLMdWq6dpUsPRbJUXMsJ",
  "key12": "5oAK4VZVuQsixbzFTRdv33FYKseL2MHedk3tD8HSQT5PVQ4oe3dtF8AFSJNSL2qnQt9yHsEN2NpeZ9DvQdJstV64",
  "key13": "3wAuonYdiYM79rrLdnPsqhzY5PiPWgrHGuRS1TK1s7BWbALo7jnBJCTpnyVYKU4UstufBktJpr5bQ4o275sKDTVJ",
  "key14": "62CTjisNw4nYAn3aWiw7c8VpwdgrVP7PTPRUP76so5HtFYZF6ZcPNk7L9w4qGbtzshQYmETD49Po9ivy69edU22P",
  "key15": "tatKfaDC1dXBugRSnT6wiPnXfAv97vFaF7Lwrjdaoy2vBc6E6mkTpZxsFjZKGjP49CbsoLQBvCqT5SEmLprwRQU",
  "key16": "5c2vZUJAyiRQjdLiUSRHwccDS5BA9AyAjVF6uGrmhgNn53esK3xhfTQM68LXeC7rCMouyc6S4Eq3cQ4cTFf4gZgL",
  "key17": "e9NaZwpgxBkn54zcQ6LwE6bu2z238a4xnMvzg1c93zAMZB3t59X3dPfWrjTAJVn2Xn7gX7Bkcz4nLAUvgc6ZzHM",
  "key18": "wE72in4d2NQjGCdPDQepbV9JrF8srMQ4FjpLzuQE1bxocVo8wHHfdeZMEFGR7ikFXk2G7rQdgtEEbYcPJhxiLHQ",
  "key19": "2Q9yrbwAj1LWS4fkiHaqrCtRJF9nYAs8ik7meJZbiBBX5qMy3s6jQPAnnciXPnE2kmPQD4LwoqR61XzrhuN6zDQC",
  "key20": "3XvsEz8Ngae4L9fHqmgpNVqfMae4mCHsZqmRhRwwsaVAhTa2FaVMXdTAHAdLHjTpYFjuNdqsETZJHGxBC6aFregm",
  "key21": "Vh82E9UPoAUT3kiKit6Lft78vfEwfHvt9by3LAmhrUog9x19R4E39CS4asymowBHTgst6gjPnkLPpEe1izkXJ1E",
  "key22": "54sLgwQSp2MvUYXMWYB2GuGcaxg2MHXee4zVgQb2XeWUG76Bqe3tGwUwkYWooK1RQKb3uQUvKm2bPR7s7Y2XS437",
  "key23": "2t1NKNCgJGNh5ZaGB29S5E3muKDV4oPD8kxF8eDWEoZ5RvG669t9Lpkb5uXS6cBG9Z6UzoKE7oXBQi9zHpz34LYW",
  "key24": "25goADcSFaac7TwHaopNP1WJRw9qLtde4Yqa39Wh7cgJEeo5Bf8yCanRSexLeMraAdafEaPqhTt56bccavVpjBxS",
  "key25": "9457TvgokW1bnm6V5uczd55rR1J8c2FiBXbbKRyWqWUrtqkoSGqAgQzEkfv4Qkox9PEttw1zurXMjcxUiP5Ueut",
  "key26": "3j6T55749EquoegTqfF7njKXcx5KbtcvS4xA85Zpx5PMA4ucMJWgr1rZsg6cqEnd5eMvD33pqzowYFeoFekDFheE",
  "key27": "5SSMwky8ryAsURmQtrwZxWC3jzZMxPAYSaZkVXpf3G5KLCTcag8yMoiHQUJUgAccKqgYhWKz9qcQVoMSKjREi4nK",
  "key28": "2WXXs1PxY4hz7yCZofsKjS4WZ5ZyuozRS2o58KspCJkLpNGDe5mjjydbYZB5FeaZznmmXTtMj1AvWC43zVbtv4yK",
  "key29": "551Xkdo7Y3oizoeRmXbzGp2ibb1AYMAjXMu7ZQzDGRcoE1eUsJ5jaketx7VE8m2FCqavJys7P3i1EukxzKrqgw1J"
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
