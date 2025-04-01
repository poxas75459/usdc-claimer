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
    "2N24VP5sqtoumuMkCs3ed9yWxLomg2mkx6DD9tRmxf2G6CEnsYnDqVX6Zri9KW8ojKLfXacBQMJXVVkJieqMDVNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H9Z71jPULGcmssWMMLK4ap1ZkM61ztYRSMipF7rKuNdjaLtGZhhqqFdpeaaJS8vNebFYozWj6P4TMrThWXCg7Ft",
  "key1": "5xN1kNfE9rCU2GS8eA1xhHouCKy9cSVaiTH2MVRcNmYd8HPEdbWhASTyeey1oa3T1QHoeUk9S38Qc2L7wqS5pRP1",
  "key2": "239B6R2rX2y7shwDV2hzSibMH5woMPX5uU46ToWDHYMxb2N6s3F8iXYCXgt9egnsfmgujfVYoPm9s5dV6SGDnAPw",
  "key3": "4Y78S6gkhNLXJDDRmTN3WhoATDCGDkXYKJTKabxiX4JETzUQwgvnnpSXyWYfJpdA1nQC1Nt1izdEqP2nfm6GNodU",
  "key4": "2QH7NZKoResL2Uj6c2irNaZEH51teVUTecY3XA4YC9hFPvKj4fHyD7EWQ6aH68VMhZZgTmuFSMnX35HuiV7J2eeK",
  "key5": "2k1vWpVCf8W8TiUpR5gmq4yienFiNz5xCV16NgpbEgZzftdpNsCCBNdYJF7QpQhvon6TGRBD2WNx7mZzJpoEpG3o",
  "key6": "2kmiAKbTajwTEXEn24XWPM6nuAnDuRtqXLm2GfR8B5ttYUg4oXBgN1sS3QHnrUWVPpX42NEDDetsYLVbT9eafQKm",
  "key7": "21V7x7y5JvzhmQHZDUJSuwJXc4pF5Gssr2QEeJFhWDmQs6dt8KjUtu1kYzMkDme1LVV8FY7kgqLtzixnbHLGLLqg",
  "key8": "39jNjK8FrUhetMvcqXRtjrpgwofUG4VJPszwqbbEvwetZr8sbeWe6v6cWSSJ7xGBGg4VCMJDqwVWbaWkzbFdGkKV",
  "key9": "3XSSbPaxo99hTGD4MrCHrzugrUsuHPpM7VJq2NV3ZQ7BSR4GF1w9jWLf39F4mP1jbZtpq8nD5PiMSDx92wfqR45y",
  "key10": "33NhLAaMkQND276vq62PVbk44YJeve7yUHh8bhNnJdoMp9BRdeVLfFXdUyurdyFU8Pp1nH2MX8MuQxtDGwnkT9b",
  "key11": "5dYREN2qPbem1Z51Lyc19E5qANYfKfC1wyA66hRVssqQq9aEefsWRm237ascNLnc82aL2Unszn8VfHVXDTawcWvo",
  "key12": "4BRJVjyJSmHQBFMowMzQ2vmEcth6Jh75bksJo1F5oXk5bVBRh2FZmuvKSqZtx6h3HgD5h45yrmdzDNhiq7BZee5C",
  "key13": "xabD8xiXTwWkrD3JUqpAniHdb5EMKxSSAiaajoVgxazGThFwy3nCCrhtgd6BUSyebnfKsVRGbesq4TMV6RqTS1e",
  "key14": "4pEssryn8wYpNVfiu6Q1S3PEd2LdZY8W3dFvAV1vQbi5SNxjF8qS2YhdG7C2wCPAxkaaGCfxJKrn8GMrhH2qbB6N",
  "key15": "5ooCNSTFSWvqd2qoGuEG9KWN8rS2G8WQzQRSWCeXenW3c5nu6SeyjkB4nm7Y2jn1y9YHmmHkqvcA7kS93iXH4HxP",
  "key16": "c2q9JHXXPe5UxBysQ9M4SNdHyZZZz4WygTTcpfxnkQPbuSYQrJKcXRNris3S3oa8oshkHn4W89a7LxRqT5ib2pV",
  "key17": "5PQWnsJpBfLH7n3MCEfHfsJhFrp4UUKz5sNAe21Mq7kbQzAccdAGVsqfozASHgMEdLPhp7Y9J43a3M7oTFi3Sc1u",
  "key18": "3NdJH7n39ih5GrMft6VNc8pK8f3yatTHV3vAXuoLHaaJ2D23pHxeEmAu9ehmcATRF6zqyfB55VMFoLT6tGvmCvXA",
  "key19": "4u714DB84ZfiKw3wyMAzcLCj2Uf8PvLYz3nXvoizkZiXa5TJS3rrdhAaMuQrQMRq9sRxxWsCE9UMZ5QV9H6iaMTj",
  "key20": "D3SSrvQrxArajeXEsExfjQdeAiP2we2EQ7AufJhHuA7PiC6tvSitEGBL2eTqRwALRhifM8P8LWKm4HBqSXKATrv",
  "key21": "5V7vMRQhzFpiyP5NAyeHcmUYmwNKPhD9bEUnf6WWZ41Lwz6WMnMi12H9rs5i1ehjugEhkgGwfHYnBc1JmhYZnWKQ",
  "key22": "2jTNtmmmu1pUcfjPiQ76wBgpaiExrW7xomtaUvHetoazPwwrQVj1WosZURcVTNsE34CRSWyRGU2ogiREivdwu7eG",
  "key23": "ksccgqtdAKoLuTWqpUosz5uhLarQi8kveCZskhNkHaKho9qaRC7kQSm4qkasqUfsjgpTZuZHELTUVVWoS5AyxSG",
  "key24": "5LTbRG8cLATbuKRjvckrnPLXmG575sooyQbKcYEgwJGR3U17sDg7HP7wekuWy8DPKEK33bFSFWLrpN8RViNvBsG3",
  "key25": "3yFg56L6ptjFjjRK5LKpnNfTrrHvYF6JJ8mCPheDw8xc6hy5UEE8iRjicNwtJxLFGmAmiy57d4J5wBvXMF6UsF5b",
  "key26": "b3MZxSCmFwsFbwiD1cg1RwfWehjtNpM1FBqwMrm1RYMkBLrBDknRrGfG8LxCfkEcuHn6PTfc8LTnsSZx7MW55sr",
  "key27": "kjN7fTu2LMmaBxnws1DjMy6SooFUWSKahWt7L8WpdFikXvSLTTW6H9h8FbS2TUWXhdQV59u6isXzj7bV3HAJgYC",
  "key28": "2YNRAKcHk1sAvxkYaGw4qmvS5YRNfj9z1eX8xKHpChEAqprBsyiQD7rCZcRCQGR5LQ9fNSkEkPcsUQmrQHCzkymf",
  "key29": "2hJCQaH4ntLR3qcW5iR3zBXXwpErFaLkkzJLRGKwKzYQxe4Edmcex98LTJe4rUB66uFqSVhiNwZfcBXLZGQbFwgM",
  "key30": "5bvYt5kTQobA9Dj52sdx4ZbhPBgwNDKWZ4wCky93EQJeLQLuGj4BARTeysishGUkLRLr7aBSkPVwAk7kd8FVYDGJ",
  "key31": "4h1KHgETbHD1eeGBsS3rm2z461MeAj1ArjacZ8D3uzfodJbHhJzgaCde1yiGvKwR4Jg23b9xz3eqT8GvRwyWDB9c",
  "key32": "33UE7XmKaVERhMn38bfv36Q4VjksBCzEoTuK4NYCFJmUgBy8kMSbhyBH5tHi2rr9o4nBCcD76WwBWEVVd65iZHBH"
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
