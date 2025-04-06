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
    "5j3drHk1RYwzDzqWW2daRaMD8DponyCtm2rsStHMUvor1mwXoZPREm97dp43uTrNhQJzebDsjGiBuW2ZmNRUXtoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EB15GNgc3heUDcN2dXwhFofEqg2Rpb7qDjktHTafhSeGFPr2cvpNZGgPNxJq1pW8inPf8MWZFU3FpV4go5hx1ta",
  "key1": "4J6ZjziaZbnQavsuqstzDx4XkjbNauuKFnU6oZipVfQjGefdr16xj5fCUhCAew1TWR2iiUU5fGrrFcney4vasFkM",
  "key2": "5NtfMeYTm1L2YDmbJ6wBV5ivrB55fmWnkqYjyUPWPKMBmmMUwkRhHrhVsQgVY2PDzLSF6rWSzf32fDp5jCWWfHBZ",
  "key3": "4cNbc8gUW1F2a6euhH5hZBUQ4bYo4dE5RnQ5d3dUysg2E2aULrRHQaaDjpAQ1sa8ADufghuLbgiLEniRe3SRGkAH",
  "key4": "4rrRdoqXCJ5xT546Hckmq5c8eDouzq3yfXXP8Zzw5HHLh1ArWA4MzPHG4LUvkMAJbByjysktfY2vfnyrefkYpFBA",
  "key5": "3VmxgsdP2gbjTRZTzhpNT71capaTon2gfSqaLbGLrYNUNcXtysnB5jp8GiSBvQVWHQmzrqQXnZbf4U14PZHah8L5",
  "key6": "2zAQKsH4YuDWaHSeiajyTbjnVWMoixchovJU64oHQSJxnUpWQYsNmKdwU9eQXMA8NS1FAuMLL9C1fcfEYXMXf3Ue",
  "key7": "4iGKd9wRZEiSUME6zTkLUVqnPp7rJPrcevtGvN4W2iEsLDuveXouRabYUceEk6unVPZfZoZmHyB1MwzrRd1Lccj3",
  "key8": "U15WcFXhanc5UpMjwqEUT1EnDDWz6LvPTDXBkv2BKBr4y5kU5NqqDu4tiAWBs6CmmrvzHog4uFK9oRhFEyeuMLV",
  "key9": "Yw2EhPqXUtMVLgii3D8NjeCTDiVWDg7KtGW6aTqmS9q8pok1425ZN1Qs91L9vH3QfXdWZA6UjL6nCv7rJBWQnDd",
  "key10": "5XttvGuNhkGvKMc4yieddQ5G76UWBfVgFqUiwJ58k8RNyedorcaQqyRZfHtwwXnVQzmKU3YkJV3jE8yMezQP6ptk",
  "key11": "3QRWin6E5FPAYzjFF53q8wXVNzNVZDXmJ8gRRu5u1DeogtXxPdpH3MUaQdbvgNJtVxmU5R1FcarD1x1Rt9PUNRjc",
  "key12": "4g2qXenbes2ESrWiHHw3WRs8sSnbb3CeQkifzZHd2Wbrm7zSG1YWPcwS4toNYbA6DhFGB1Mzt5qQ2PhdAMEYicNK",
  "key13": "4h9aS5q7SUWz8cRDeuq5Qqunu3Qos6APPWjcau6BQar3RJ4QwwyTNg62ds5AxSofuDQpWmzLdQVAUiY5hhrDXFey",
  "key14": "4ovNV1bUgyLMU16D35RWepQ2y1nSnWj2yRwCiXm69EvgJqih8ApEjmK2p3ERjz3XzZHn2TqL4NJmD32A5WddKu9R",
  "key15": "WyarPJXj2bDmK2tpvADY2m8XwYGGfDjqxri9rz5eYjyDGyZnmfpBWiaPa8Wn6HaMRbuchEB5nue4vHYHVayZTnR",
  "key16": "3oQE6h9nvHo7fqARZ1McsjeBmJhVYw6E5XuJRbN3BB5kMW7Awxq1YGFtJjxrCR9pwRcfVM3SFBizffMzKWzrWAqn",
  "key17": "3XmAKNrsVj1d7f4DPmKLuJRM8JiwhDFLSodSVW4tNkGNH5NwcSfLk4ZfS8U5GYKL8zUnN8CDwxCHSVXQE9t7XM2P",
  "key18": "5Ev6eMGqCiobkHDGSMy22ZJYpLeJYeJ8JkJdU1qiHeqeHehUgTmKcrZ6DXvbgV3xpkASGSiC74TqsNt6x4dTp4MR",
  "key19": "2CLKcYse3w4vp5272yw58137J87DsLehG3osNM5XddXEJVbrqtoUfaxnRztctHZYsMvMeVfCSvct2PnQPgaZ9fjD",
  "key20": "5aQMQbpQ8kNLvKHmZTuDguNW74ffLmaqxgLJ7JjQNbW1JUQWR8LL2Z8c44Lsu9DZTb38hR7K4HraNpUNJ7q8oqXe",
  "key21": "435cvkXYmmgQG1kC4eQJh3ARAHcoJvBzrgiPDeJjELNoXgNvqmxSvoyGCzsqZWtedFypeSABhyKok89LCrj2jpH9",
  "key22": "22YuBmmr7iZ2qtP8Tcq1qR3DwNYSqXc9eKQR2ovEwey2WMufo1jgzkogDgxv7XHas5daQuPGPtoFgBkMDT79tGc3",
  "key23": "4kGwE6nd8jhtaH2iTi3PE6ZoT7hAofj4vAK4ZPhmHBRtbp959Mzyv3RQcy8gqxXsY3aZKzshNTNKcXf6QnKSQ2Jd",
  "key24": "R4jnVUzFfcR98AVmKnc9YdxyHhWZNV2qiS8Ns7y4oG5C5D34BYq6kaz395ryyKMeUnnTyzRHDtJ3orWXfCoUkpC",
  "key25": "4PfCoSmWKMi5twwAJKy2QsM8xEAatipwLhc3gRWrQhubaESjRwHirp25Q5By6NM1g7Nqj8HJubtS77eMcW9n7DsS",
  "key26": "2fjGJ7TwYzfTAcSxA8QNrNBLxHwQWM9cGBMqDHaMvbjmrCmg7soFzzSR8Nv8aAuCXQVBSJv5TbudkZQj4r5S9JEB"
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
