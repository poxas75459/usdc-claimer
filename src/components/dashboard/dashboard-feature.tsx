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
    "3KwotSPeCHTh2xMYLFjynnHP88FfYYv6XpXi1Ft1X6J66DTZmGv4ixXubqMwvpp8ss8bamjC4PxT3BcQL8pyhTX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJg8UfjL1LJkciT7XVUR49RduYScgmSDAQdaD2KTwdZkTAw5o7nQV7c89ATsHDGZggLtmziwyEjdoJxPrygG7xA",
  "key1": "5MWauYRasfGt2vsuG6Q3WbLcm5pMrQKVb8MKWG2gEpnGYXtDk4XUWE8uju9snQY1tB3qEnRaiB5Ya3Sd1RD1YQTa",
  "key2": "3BKcHjaJNA5YwcLSLDkdmckrnJAz1rwRprAgo33ji7DtXhTzLZhsZu379TGxxs6AyFLnRQbtqUsudzVKoYKUoQo3",
  "key3": "3GouVcjKRg94ZqXbcFAU2DzCesBt34yP7Ek5T9LSbKtzschap1tnZhvc251Ni8g62b7VygmvK8oHivHLHrxKzPaY",
  "key4": "4xHHD5kmTif25cehqZPkHkVtmkLE7DANaihAPbQvFE2T8hf1LYiBRe4wXgYYeZjviEAkNSciszXqviZi2nKgtPod",
  "key5": "NZehUrg2fDWjcmmwGiNtqMeCHnR3Ea5Syq6irrDTHzH2VAr5n3qAh9kpho8Q5VEwCA75QBysqy1oeJ2SPrpesa3",
  "key6": "EZaoRTcBXEGD3GTMoTC3kKWKUG78opCWqvYUgJBbU9VBpWP9bSTnQuCV1raU5MyCUpJZETyn1U88xmb6P7dmqEy",
  "key7": "3nD2gDqXndzqGde6PM8ZRzN79Z7RikK8GejZcjh8Vef5R6MMb2Q3aN17VPPG9aDwarTpDhkk48paC1YiBbBD3TEW",
  "key8": "43rbNuKisoTphdUC215dQBBZLZhm6C9EjiMd1McoSu2Emu61njs77xpbGncrMd26298raUzHJrM3iNzvCK2wPRbq",
  "key9": "4meVo9HcsTvbcPqEqu4feiXdeeXRjJVze5cU9t9PfwaXASLnhgjcPaGPE9miRMq1n4taDDergB7vk91tf2KvweCG",
  "key10": "3NzutWUebNqSLH65Nb3egfdLfWqvyXjoqGvmM1JK8SUKrZqgyQ1rcssBwxtU5yrz6pCmRZi11of4fsY6YGrN9xKG",
  "key11": "2UbzYpshQtR1L7Ay8W5iV7MvcJjWaSkeX1mkMH27CC1XwMr2RyAWP48gtzE1rYoEaPnBfhPTJ96B8JeX5ckyyuPQ",
  "key12": "4Sr7wACCkXi1Z8GRGEGiB6oozucWPV5TgHK2fezYZgYhp4xoRdxT2xqXyFXdzzCzAL7ijKEEjMmvdd3Q8p85xLT7",
  "key13": "3JZPiDMBwRF4VviNngMtio1bxp572LZNV8bvgWU9KXjaCRZCBW7sb4F2x1HmrRcLkQd6yAJ5BkPVYqwVMbAU9vyp",
  "key14": "8wj3W1Es12QPTcNiv58aGfhSx3xrdL3ARLjNEZ3ghWBzUNxNWZBS4jGYwtW2eTdLbDjXruuaMStSbtowdZpc7i2",
  "key15": "QPeHiT9SrcHiEJ52mVVUMApYpnT1DJUDKPyKh73SUaQrNzr4x8KXrXAuC45RgNhGTJG8sZMMzryfKbcH5aBCGDo",
  "key16": "3Dx9KKaULzHKZihWGEmEkA956HDGSSngNTdcLHTss5yEjNyjeNzLtWz4JDSVUPatNCf3qff9aatrSj6W1nxTYkeh",
  "key17": "828Smx77M3FyXZptXqpVJg3CgcasggHAriH5QQzcENSTMGUTRLh3aWWUtH7xRfTftibQ6CcLK6fqrqcz3D1TPFS",
  "key18": "KndDGjH5KCNUinYM43CcdGurfUUcK5e2dAoYEQHKSw5YoWZzhnKNcB6dPudkB62iV3EgmUbSHJkBoMhbsdjSy9E",
  "key19": "3Qau3hjNoCitaEVDN4npFgjAsq4t3ra6q3Y7PNGQn2sSKa7qJc2ZY734n11TziELZPncMst5bC54xkqMMzDYrcPu",
  "key20": "4S4db2vrL5H9ejh2UkA9qgTjVqguDjVCAuTJ4ra3sCrrNTSaWvQaJavxE448oqbpjGBoeueNd5Uu8XCVzQBNaCvT",
  "key21": "i8CA2E2J9hqWcKc2HugFX4BKHRs1bUTzThNVcoSmTJ3HAtqK59hP7dAb25fHDcp9UFg9jnxgFboUchLMTwM8tiK",
  "key22": "2nnYYUXEYZcRp4TytiW1rqhoHvuydTcNazba4g8dWGe3wyBicwVyftNrS8SghE9tExaHrd6xNDz81ezqJH5sFC95",
  "key23": "4Kx9KdvTe5TvgdmEDAmE3W8uQMH6Wtt87ykbZtBicKgdhKfumapzuPW1G5Ua6RcDzpuvAUQvgRok28hbL7gHPm9h",
  "key24": "2EoUGxpQcEGNtvBhTWWHrsjg7xseTz66ySZuxjsxfFh6muue8cnBCneaatcDKVgA3eNcjYL9cJAiEda3hwUKRT4E"
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
