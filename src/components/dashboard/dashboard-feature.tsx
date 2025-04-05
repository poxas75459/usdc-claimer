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
    "zBNRUN7Z97rRCnEpDkSj3WkKVNBRCJnzDvyAkW5ZzE1LPCyb5cWeqSAV18b4YRDNPz481qgZVjPreV352xQFkJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9vgmW3Kwd5zGuDcgwpveKF3k95gQwe1NGFEu9SLnkANBaV8g14aJqGUoNWFJWeWSRnmv3ENVB6L9hNt3aVdB9ho",
  "key1": "4Tos3ZRLXsZDKbizUMLqiTruoyFiPBdFYSQWXwvQ9DGX1S2b5Ut8HVHjDE6fXFWuPpFNbEZdxsuatwsDGX67ZkeA",
  "key2": "4KT5QyG41fbFvmsj78RdTMS8pHfJrm8dxvrvK1UfM5aTMAJ6PdRdUnG4ik1cMMTJxrkyAJXcEezCLuopKRNwBKT6",
  "key3": "nWe9CN5FMagWf4GfLB7pt9R5RXMi8mUd8Y5Up3aUUFm7SHAbm5TYcAV7BmVUXdeLdNMzxTh3pmJN41GaeqLD99x",
  "key4": "45MfcnSB3ddfDctLdbstoqHUP8AEbEjawypqoBWErNqEZkqyWmTVkt466XYPTuANVxjMnyHEogXFixCksriDoN79",
  "key5": "5SgNC2yLrrGceTwVW5L8LtU48dLUYCyTvG4xs7Uw45pqEA2uWySJgsRJZD4T7GK5NgG16c17wHskGRnJNTWFgo5B",
  "key6": "4z2hsXeq43sNp8rBmoanVaJpbp8P4EvKzb565uWeAqe1Rxy5szXGFVZunvyPriNqss7UdkC5EvnDntd1bxATW1Sd",
  "key7": "4Z67YeT5CgMUqmieogQtfQTzuM2fJwJQ9h32KyLg48o12VkHyxAAKoBniyZpdRLnWaDr4saDmSaj2CLRznpUXjft",
  "key8": "3UcdXKDpGAgr824kTopKmixCGK31uaUL42jNbArttZ4j38aCDKVXNqRcfGZReNprvMsNR8tH5xSDaR2y6Ne4bboe",
  "key9": "4to17fGBxTe7yyKpKPK9XkRsEpmRSBPJEvremexEFW6iz9w1eCixoaBq4B2idxH9AeUwF53yq647nuKhXvhd52gL",
  "key10": "4PcBLMLrFHfoUAe4DGWBG9grJiGAx8kxUCHQA6EEhdQNUzp6b5c57NBfEfpg219EzCUTcdqHp3FEAJn6ZvsfnjPh",
  "key11": "sYWLSzhazkEhDNkWHSxvXcGsQ18JysCJZW7wWxeSFFSyWrYd3cYDdsotsR8afYXRPf1ibiYF9etYkCUJF95yngs",
  "key12": "5PmhGZF6gFFtjDcCswk58wVV5A7kig7Eos9aDFxb6mErUgr1YTEwNejftQamrQzMn7XUXrXBG1AsnGEhTSzdqWu8",
  "key13": "H8kvgbTUy6KDKJiajBWLeUwiagU8CTLJkQY8rfcqqpqjvMTHDwxBjnLXdyiNaKpWhzRUYXWHC87R2Gm26q4K92E",
  "key14": "Qir87FfiJ1nQEgUTnPe2fYjfy9in6SLkY9AnZykcum6HsNDJU9NHu6tgbfxPnLpBUWmYnPkbDJXKZjbhhKLjQLR",
  "key15": "2RCMWk2UGPxWsAzXLVgNGW4WR2Fg6scNDCk3MDuNHwJAtE1BUAgjzbugbwtDsJp79LrgkUy7cZUgm4X27HrnLVmC",
  "key16": "52XeVm9zPHfVnsBgywoAjcFJuksRzsjcp5zbs3F8SLNU9DC7UUiYukKMriMb1z3HCnULoyhr2HFDmEfjNkjs34HR",
  "key17": "4RJ7L1zFbEtP9JEoDDe9JT5ZXqnaFrXYJMtHKnU5gjg7J6cLk8N5QXTXYZNTnae8TaAoDFnyzWRguRUCd2MYd3ga",
  "key18": "zpNgyzV78gd2J8EMMWpxvS518yq5MwzGZyMVp9zbsUTgcAyexQajDvBLaL6HYRbV4jqBYXw6rAb1GA17ptCC2mc",
  "key19": "2aSvRYtjQRCXqxo3t3n5g1nyHPxS3qgo8WeXFwwiPPSqi2W899gcUE74S9Bu33uXPdt8kzJsps8vLAmo3Z4y9uvS",
  "key20": "2B8v4xzaJHUcnZ2mESm1Y4Hk7DebtZyFQLkKWUbmLSTzkfJs9sfQYWRrd4Aj88CbYZMjygQDRByMNvaLETWLKvDw",
  "key21": "kdqGU5MWxtx721NuV7HhvhPCSuaF7pokCyodaVrCBW4CZ61eVCmQSthYXMVAtk4cyGQmwRFf7BKBbc2TRVFfMBo",
  "key22": "3zMvdgh9233ynVxpMbbMcAhmVNB9wauCTPA4c1mR7GKupbWimYk2Bj4NrPfG1HYCnwY8U4UMpLvsk8veKNXcANcL",
  "key23": "FV2u2gkyvrQYQwixXMCEvkY6tL8oubypFcGMDgHQCajqqYq8UPaT5Xcu4y44kGeBxCUSWmkxSnj9g4GnUvAQhrv",
  "key24": "5iZBv6tAn8ci5ohNsKBsbBR7DCtS1u7XY6FJcQjFCyrZQZ1y1T4BeKrFiYaXKiXy1RY1yp2a5c2gyYQJ1Q4BtbWa",
  "key25": "4w6D8HGDgXAZRri3N7HfReYAdr4vG8BNnNYoCDQJTsDCHv8qVKJ9acd2aPKWb1qghTZ5xgkGoi4wbNBVeyh3rkV3",
  "key26": "MacTMadL5BjjYPuJyocHc1X9fCTQVoNCLKP6bmUUa74ieoELiitpyorEpyHFh85wgbY4ZE2PZbPxq8cdrzoNDzq",
  "key27": "4Guwhg5SNS616QqfDCxZgW5qdSBoiF6joy2dYyRAHvCkHUXbq3fAZTzKeCa7UNNrVKbf3yE6MU8Nrymd3VFCPjUp",
  "key28": "4QiHScw4GQCx7F1xp2FaZyeehxsgc1mg6VNT7Z5CSBAvs1jJe94fyi7bHZXvWiqB8S4jogbu5PuAJEHZ2ycQG2KY",
  "key29": "2ZAiCjuMJWzLo3LimNoELtz5BvtumkfcNZNzRag9J55mYrB5JXNmKEQinB7Lt9pAebEqriXkomWAjddXpHf5kpqM",
  "key30": "3vdJm3yMeqS4UibM4AD8BFgvm3adpssFSEgnNZiYottsMbRFAh5nTGSx9nTxqXdnmP4XV1H7bKEN965cSugKkDEM",
  "key31": "3iUQqDdxyB9DSDtDVFRruWi9XfYBqtZFsQX4bXqWUzcozrwUJxQ7S4PiDPiw1ipZ89Yu5mP4vBeufPpPpNLBNAWy",
  "key32": "zTKa2cY8ABBSjXhx2qQktsy91kwHw4EbDLcQvJ4NEqQBSAbeXcuLLX1YfBDoHg16A4y6Fi5uhcB7ivFdGtuKaEu",
  "key33": "ZQ3uaKdTfDwoHZ4ys36jxEpHtCDqLU7Yio3zJ5Fx2YedwqivKK6xp1Fj2GYEGn23tafiZqCSsF5iAprzTnV1Cwb",
  "key34": "eZ96rpgzQPSKCDm94Pf7oRY4CPGKhSAFvXFWvvMrAE11T8EfSHch9guBz7wEeZ3gx4m6oaesf3qcw9mfKs5aLQA"
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
