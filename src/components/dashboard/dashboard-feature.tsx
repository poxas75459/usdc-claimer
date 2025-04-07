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
    "4YoZK2AsLRjn6MWeUwuFT8RDv5k8yat2Y3QYU61QwsWNu8xmA2rvkQQfH16Xv7PigD8mGWAYcUERJAAUuUesavfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pe8xywNmfvbki7NszVbJoiw1VyhYzKB4hswN2eZDJ2v6rZgv18Wjqc83X2xpdTMBA61Qa1sSMi4t4sUtDvRRo1R",
  "key1": "3j4kH9W9sKhuY4jJAggpnMhVBbdSMJuRXUno71ucXgJoSgxvUP7JkqhQX1an7tssxtcbvUwLNHzu3BmySbpU4rVz",
  "key2": "2pmSqcWSrJauAHSPiTcNJLkJdgCQ2AbVKKUB861mp5V3Bmjuxd2NBf4dmCbcUtCRyYg1j5hxidc2VXBAxYbXUrmN",
  "key3": "2J4WW9S91Mes9zyFKVp7NMcWqj4KpzwoXRpcNmR4ubVDSvwhJW76sNERRatKNWbcQYdLwR8mYkrgvzSNM94r9Nfb",
  "key4": "3qtT4LTdaZnJAQk5qwpjh99Hu3JiXPuhDmXab81xwaZiuG21GfSrfKfWD6ZzcHkpH56xDEfSk68rt2fTgZHmmahX",
  "key5": "4KA1Z83y3KjqrPTagrr9UiuBWK4PYNdmepLfkQkVMuqMSC8dvJYwWajBHRgsrTbxUMZzeoV3bykNVgTJttZ4ejQE",
  "key6": "3kAs9ex8vypRcchmq6oZkdkiJmeSxbvHYDvfdvhzJ1fsbCKQGKsLkHNguGEj77kXQT3dTpWWt7C9kmiwZM2wXqnC",
  "key7": "Nxr1u5QNYvXf9E4byxEkms482NVoKaxodu27iYrRCQbstu3s3XXVUTmcQqBUBDVRYzBTDCDtUoYD5FiF9XqEdDs",
  "key8": "3vGk4cdY5udqYgZE2ogrfUBymJaDnN7Frdij1wKXZvQbVKnFMoirYcC14FQV21ns8xs8qGthZfAgqkQJLVZ6Hk3U",
  "key9": "3Y1cxAhjUCS4FDeALoQLijF9BuwdLQBEALzryhauzWa4QyQo51FKYCeHCVKGJDK8R9DJwqNqJ6jWvnPEbBRKTBVd",
  "key10": "4RDWapoSs4pPdtvKb2hbZq3C4FceYt2n8Mgf8dtebkEYCqbmjsc8e2Lrt2QwngPHxBJsZDQzYp34cq9LgUUYKpdD",
  "key11": "5W8JUhpNw7XtDpfcRr2nwompJWKYCyzuZieujW254Pg4uG2NCGQ8kJ4TEBj96iK2p16zUz5SfGNrWsS2xdbnsWx7",
  "key12": "VaVhZiNQA1JsmemGQuuupPgKmksYVmDGzWDnP1KKha97WxdS8NuxaJWamRY7raH1EjFFAj15SGwRajtGviywva4",
  "key13": "5b8XhoosgeMuhHpqm9Ph7UrXX5g4jK3hrn27SbDLXkZro67uotDuDTeR8c1EqmQ52vapoYfnetXt8Ngqkh7dcSHb",
  "key14": "3GVDzUJH7z2V14ZrbxwXQijtUwNQpVe7pojAju9gqhbmEMbWFprTBdWrL15ViRo54Edoem2KiJ9La71MMi1ZXBwp",
  "key15": "3XNyJ3JAFmsJUhdwRLgeCFKWn56RquwJcJEV4UEzYeVqX73JknA2hPeX5gZuvhwQfmRozdRo1cBsKpSQpdf6SfX4",
  "key16": "46w9NAfS2CcVJrTrEChRqdHyaHFkzrZRCMercMY7TKsrkmJtyAfF5uKbTAWbw5PE9J6imybd9SphF5GBmM5t7xEp",
  "key17": "rkDp3DMmSQoCtPMHnUwq9CbMoes1ixnSpHipp4e5ppqYLG3GM6DiHxzEgkZbYZj4CJRTZLK2NCQqcK7Zjnv6Ji5",
  "key18": "mvYWLzgaSSpnANiSXLPHoTapfZXS6ujgck52b98dj5WDKYgdqjpnvccmFqZW6ahdfztE9uAkiQYkF41Mk6cPSp3",
  "key19": "5QuchKjfLsNVchVZcyF6AHrx8QFvbVtNbLPKmbeYeU2xzRVERjPG7yBSv6ZngyqGauRvBffPNWLLRTsBB68Nr6NK",
  "key20": "32SmAyrc7yGhENAvxPf5JN7ERGRMBLy96bTo88dtFHys9RieqT6RYPnheULV2fuwM9Eb1vXTnPiCsHRLPZAgmmXZ",
  "key21": "2dYyzzjwBR4uYKKXhM8GQubFN8PQBB5PZ46Bq6LHbDQHcsjzi1WmBTRq3BYCXDGLCN1LA6aQP4G2oL5n8Gn5NiXH",
  "key22": "5Pd6DJqnhuPqgMEFVx2NACz4a5HbwkhhLdSNqxkU6HkgprBiPboZqwBVpkF1oNTUJHSYyLfac1qyVVq9VCcN37xR",
  "key23": "kb8euUD9gu3bXV7TzvzoHN1zBSnA2SneA8y2jadKMRg5pX8WQXQHWQ9epdgo6TdkYH92fZYd458dNXuEhofDHeG",
  "key24": "WUNMDSpUhRVnzU8XA8ggGeXt1XUUgrVojDFTiPST8repZUuLoQCCdT8Hwz8QHjkNgmSkoaot64UK4CDM1ewS8JD",
  "key25": "497qiPtQCm2Q1X7NXcfGjgTQbGa3pyuY7yNs5M8Udzy3ToVUZiemXPAF4Mobyonna45LTbScn5cqUXye9dhSA4tZ",
  "key26": "2E2b93qe91xMc3pM12TrDgmxDY1EVnL2HeNqEp1ZRevaRggC12m2XHw5Sr1Qh3X6xUegHyt2tmhQsuYCw4wFQWvE",
  "key27": "5KnWK2swtiaNm8VbZ2jTQLTaU52UFu3SVmkwddi7XDBxjasGM1XoAxSoc8daGQbSXoRBT7yKWAemvopFuuDBBP8Q",
  "key28": "4XrTqmQAwSmTNkxVdKu32XLoW7ZpGEzynFEhX7HmuL7dwo9pnYpxqYpLho13V6s48oZxKvBstds1x88kPStKxC2p",
  "key29": "4bmD14MydsFJx2E48o4Du9XfKn1APXsnC2yitsxg8opPNCUiyPkVMhxpWXkLTEm2Ffddkp1XmC8W9evMD7JT711F",
  "key30": "tyJwLkvLs2N61EPkV11T7Nfa1mTzPtKCVY2NbDEhmncS5QvMTYZWDaAkkdtmfRxFsbic56uc9UHAs6M7hn1jtxr",
  "key31": "5Y2RLEC2Ssxd9X1VFmgNzJtD3MUQ84F1Su3gayp2GiJTNRTxFWyiPr4yfb4MWgkZ8YNnZM5fNYWZnTxJJmox2vHa",
  "key32": "4W9wZbw41aiBNBsXw1dFswZhJVq1LhJpSnH7N9hhPogJkEfC8qGTFRjmaxwKJ3zhZTCUJcZkmG4au3cLKZKSY2uc",
  "key33": "3fUnRv4QiDnc9tHNhy2CcV4SJSoi4jXByR78iWZgSUgE5h7aasZpLmNr6xh3PiAWqUHpKgZFfrq1xJMppYUY2aJ8"
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
