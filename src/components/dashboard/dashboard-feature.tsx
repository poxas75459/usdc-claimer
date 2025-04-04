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
    "RSoXfUkxiCxEshxGfHRkMRYiqsPRqpqFYEtS353HK3tm6SajecjUx1nSwrtRtt4VJTuCFe6nMPXZyTTSJqb5vUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wu2reen2sCogJQbww1ms2x3GgdM3YAoLPea2TBGwkgeNKT3494ZTewNz28UJFmvk3NXAZxi49Y3YBvpexB43JKw",
  "key1": "5UT2vaRJXxH8A5SBCobVJfC6pdL7eKKW3XwCum5Jw414XddPS695zjTYdgFz3WXcKooNaDxxqsTt4STFzTRZURFT",
  "key2": "cVqz7EC5caVY27Da5VDmnYr1vboRCTgnprdTNBA6jxe4drYzK2KPVCnbxsTV7h5jhFLwL6eYucfjbyQgjx6WpLC",
  "key3": "JBpM7CkxUV7cgdR47GL56DgLVY7JiRC5rE6jrVCji7dhbvGBb25JYMqa2QdJziqLi6sCZfyS9BkLy2HZVYCWsoJ",
  "key4": "22Q5EpzPtrWtdKHfAyKhThFhPpM2UPGfky1To9jUsMzg1dmYtVDAxV2T82LcPWtTirgQQ96DJtX2MEAkcw3DjB35",
  "key5": "5psAeRPjoosn8We1HACHMhGvBJhUa6eqRV88AAoGtP8bw4BX38uZ6G6asgBMtQf3tY9473dDRKe2aguyTXzsALdp",
  "key6": "5REBVwTMLu3wRF4raKe3MVtGMmud55EFQ8NsC78z7Q21KJjKf6jRLWUzgkf6yVwnsPsmc4VUPoug4w8Mm5SoWr58",
  "key7": "qyfTtC96oThZpiWRMBRVovnUVLc6vmYTEkkzUgTe4c11NKx9jXX1bNJsYjW6CfK6ESmFML2R2CxszA3iqpcw7xF",
  "key8": "4pD5VrVDFKnzYaEwWz8QvuCH27nrtQtucwYQP5rDnBseQr6tFA9K14NHH2CptHMbX24eM1WBGUWdzCRPtkwBM6v6",
  "key9": "5VZj1EK2bCovbNLW8sEbsP5XkdBBq4YSbWymwTzoTK99A6PTmth4J6Mgi2TukvEXLioAyyDS5nUqTLuufWDyKkK7",
  "key10": "3BdMF6iyxE6ghC3tsCj5715F21SP8xHZ4sTc5YDycUMdiD2mhikCMA9UerX4wv9kuQquWKifvnfwEsxbbvbDeNZ8",
  "key11": "63h6ypJhPyhHsrXfdJgooorXGVLhtkzns1dCAyYPD8mzREMcrJ2G4CmKmsBMtMXhF1F1QaeMqQPZVvRZwYG6jMRf",
  "key12": "ZDqE5QrPbaHPPMHojc2974HZjjDMTDaNqtL36KDQ9DYg9F9UFRmvL8VTjDXkAzT1PWpJbo82frXLBmoBL4GmQCW",
  "key13": "2w9ASBAaeJcu1dfiNiC9jbBPv65pFRjg3GXakP7fFyrx84JqhYvVUCXEvNKVt98zZygNKz4R6mpVjC957ZtpgcWi",
  "key14": "4JoUBDNN7VXBHoDSoRHtApZJsd9ZbYY1oRyhzAR4omAUxcTGzpaSh5U6ZnXr3gNEdzuig7fFEqNP1bFVwyX27jcc",
  "key15": "3xQ9qgwuLiM2kYow6zdtfGvgTnsXfi3fyY9NYQd9doA7NPbrmciEqG4eCkCvqzVAw3yd6B5TuiSDxSwiqBnF8irm",
  "key16": "4aQhMi1cQ46pnAvyzDNHMFi5p4kicNQeT8tR6a1rZXhgYimcsLS89icoQWwwJefqdPgKc4CuJYy3TV7EfSsC39U5",
  "key17": "2eM7pFSSi28msh5qJ6i9uzKDxhYJZZNxGEfwNEMQQxfFXdXwyC3Z6C35vtSk9WZGFhirrSo7BmZdukCHFX3gk8w5",
  "key18": "5GvqhZFNk9uRe3hmbwW7RMeKWecuNn11AuUSyGVEMapK13Gs5XghTFYLADQQzfU3hE2pT1qAS3KvqVcn3zZhSPYg",
  "key19": "P63KRCkPAAXSEJemm7JKaJkxwrwTKSjLSWX83xxTy3Nizs9MBNwjR49X93h1ZnktjhBfSDRReokiWDB5EStCg4E",
  "key20": "3DqM9vgZkmL5mRMTnzJz4ZoqsBBRACyW9ZWCh146bTRev68mRJZtNbbvL6e92stjVsbQzFxhwjsDf5BTdoUCxcpD",
  "key21": "25gN1oDuDR3amgBujJLbaA3YNFAUKcQ6T3Nt5bpuMW47PU5A2Vuzvs4TafR6YbeyTfmKKNri5zBcQNoA2LRyA9iG",
  "key22": "417swCDXhXu9BMZ1ND4ngsGNF2GdE48aj1ihZKhqkCb3sTeJAyRupQKtqmoPsTUDrrdDsWRDdexcdUHx9v1ucWeM",
  "key23": "5zvXo6AHWxDcYsBm76588iQM7BaU1i9ErbabCqGoFbJCQ5pFvqhZez41NoSvXNXuHHFMi5gpjDLLdnK4acNgx9GK",
  "key24": "4gxuWKnqVvfhHYp2WjXvxw8ZckRU3Uben7yoRbzJK1udpofLrdSGf4prYjqJsxKear5GrYTwAY54NjptA2GqGapT",
  "key25": "49wHWd4cSiUi9xHGFHViVtT6XEkKfWn48WJK8eeo4JM2ygtBfVRp2e8bkx7NmLx4jGoSFHJSDjfTFV2jxbtUMM6A",
  "key26": "4QDLcwKewso298VKUBjAgkTwxGhfAWetdYW1rvKCc4sDUxwf86BbAeCWiZVkopofecGcfVQADNGcpPxHbmcb2gyB"
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
