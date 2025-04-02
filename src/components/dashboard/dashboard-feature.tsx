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
    "4Vs4P6UFySzjA1Lvx2eYe1TBGMTvDdvXDE2yPdop6Y5BX73NV29Z4UaFkZNq7nLnzdipw8GeW7Gbb197QPXtKUmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56E2Nmy6B3wLfnPuZHAa3jSeZUJE9K8tDVALgoV2TKY8YZrTgDmGdDzAw4s3uDPDXo3fuMTp1V7of8iyFS2Zv7p9",
  "key1": "vshAQLphpdLLKyB75S2HTszzj1YgTQX2w9VqV2TkWCcEsaB8jYuMu8F1AVDZsDSz3hzwJNRy1QRU5wdAo4NWPxB",
  "key2": "4ZbFg6kvwknvrvBsW214vBUXojTqFnQK2YTRdKPmjxktSYZndL1dnxpezhuDCCEFpWx4AreFjBEBfNehE3CCvmas",
  "key3": "5Q4fJZrkESZXHJp5hq25nKj6Hrn6pkR2rKLzat8gJSydgrtgDx3J7SqTeiJTFo3yicbaXz61ey87sb1ih4kU8usq",
  "key4": "3ZPxEUP1dppx5EgTWQVcQJ6x5sMdYqbvEPtta4ZQYVYx5Feb2g7dXmr7FvgS6n4gm9ssDDYQUyrUD1fdBmZySPd7",
  "key5": "3t5zJv8osjKoFJiTHtczYf9wqA4tK5hGTywzMgi1fS5mb7FRHHs8dxtU944QUcX3aiffCcd5HmggjR7nPy4nTh7j",
  "key6": "5FQcXjKvKujYK1vGv9x7YAKFmiqExAYL4wU3cTt9ZEVD42eKBfTpXS6TibirMvPdSQk7vGM81G5pSVAUDijZnx6r",
  "key7": "4VoLctHZMmdNv7JXmZJunmwyFypdc21ZsWjMTo3fDNL9h9EGGaTuHfmW9qka8jo76BDrbDXj4BGPkhqPRuRitYp1",
  "key8": "gPrEJ7VQZMeji7wygxZcvuqRcED2CaWzTse7Bum94bGN1RNZvtz67vLaQ8C3bvxtrB2XXZUxZdUXqvxf1acrr8e",
  "key9": "2RhM9Mt5mkTsyy7HYQXDbWUCHtwgQL4LYmtikMQe1qfUcWo9xXvb51Fn74RK7QCvoFwk3atP5ZiKGqm7zVxvunp2",
  "key10": "2TcCLntpw5pQo5YwjddsYNapQKEWtUBNCfJSPzwVrgG5XWgAMmKY78kQpMdsk7bShf6ZMqJ5o3q3JxFzZbgcRgpx",
  "key11": "5sMCVW4bET3FuvsAYHgKnjBewKZdFk4YPUaqiGSB9CfHWu3EQdkqbKCZ9bGAZPAX1WJy1wh2g42ADU7dxuEcEtd",
  "key12": "4rhP5sSdCTky8BppJCaFmVKbZHGngDoxcNYadESVrkoMEmyk2bC89G9BnpCaKZFyYA59K1Mv4J2SydzEmngFrbpJ",
  "key13": "52pHp6nJH9bUnGNHvFNZ4Je8DyUhtnpVzQSVvx8gefzbw5kq6mbawWadN2A4UzqPETHqyXCvZNReGP1nvh6egCuc",
  "key14": "5oNZKY1HA2HJGen5SVMKuk9fxegpdUZxQyiqaKXFwsEfRuYmmDRFFuP1jcNEVfHbZV755SWji5pfLaxesKdcrkgu",
  "key15": "2LbwD46mR8eGRTzLAbMNCM8qr7eyvJ3fbGb3FUPQuSpJ2kPn3NacEKLSAmGpoofG3rEpgcrSXda25fX2hvhDcYHU",
  "key16": "61GWdfWEhiXSWPzqUMVJDVnfzDGKi3WnCshNgTximZFvLvji2GMrj1NJxrWVovaf3xyGJAja3yfXdWv5aiiZ6oiW",
  "key17": "5pgnWUGQnjpia3VGi29mDdR1eJRF1aViAmz8QrV4uE7WZaHRA2veEaTKzryLbgK6qCfzFwq6bdcmSq3jmGCZCwsa",
  "key18": "4AiF5YggMkQReF7jSJ4Z8UzaYdt1PPFVQZaCFTxUKeougFo3GE2KNZUM1jtAa1MpHiJ9fQAJXMGsnijbBhP7RYot",
  "key19": "24GZ4VfBojXBZfcworwYQLSLtsX98jfpaCbrA78gzrQLJHX1vPEjzAxVTAG1dwGSEMBTHfnsbbyGjvyKf1oU56jJ",
  "key20": "3i2mR1ebiMZ3CNQTXSYwdHBsUovY3Lwxk4uhxikdebKxLdwzfjeCxmNn817J5G3t2ppemwkk89kBYKmhL1Kkg47m",
  "key21": "4iAEkeiWzyGqKo4jow3U8c62Uu2u1LvKvMDM2uFVtj6hRDGGLoogyQTngQkRrCQ1wHQpJVBiFUXkY5qrkU5QsUqE",
  "key22": "3iyESrduQE7V9LGHM57bPnZgboKQ1A62RbcojFSTPpj5hzza1NMdWiEaA6pxgS9MaogNnikMnMQCWBfZWufGbHDL",
  "key23": "AtPtAD57HEoFgsLe8enxeYzG4fP49LodkeKfVbbMxbPatSiiwVCCycjcxmUWe7Anbi5UiQJUY2CTp9s1iS9FUiz",
  "key24": "5xkEKXzNstbMSr6Vcq4jPCNqC6M6owgD7JkJiv811Tr4AcE5PJPoXMJv2Vpu19UTDFCc2D2kxsHDDrA52A8SwMQy",
  "key25": "5prFJRp5yzLkLkFWPBpvjQN9VhgBLCobS1thSMpB8QQY6oUpw5CPqoVn8US33P9y6aLo2EB5A5SQRktQyR856uG5",
  "key26": "3VTPjF1w11qfMf8Mv1Gi2zewmTLDoio82wSUp4RXTo41zTpWRTfLFWFQJULHJDfoMXYCsNpvkpsvqCjcQrcqYAiM",
  "key27": "4ST5cYk2rZazeHG5r6v5vkT6DmrpaAm9KFFrrug3Q4yHmoH27ydUCD4bycaRq1brzqBTa2xE6xaj9Nd29wcprWds",
  "key28": "5pQbKNMmxLabCq2aCHz7PmbYDWhh15PhwMwHCKTcGA2gvpFvAjdcSMbPu6uyG6Mbwu4CSg152kE31tNNdRAD3M19",
  "key29": "3WA2ZVHoc9erwuLFLbE85tkSthUhF9HwgqKEkfgSgoQbvuvXuqofFBKKtaLXt1F4zeADrBkFMShg7BJ3KFuSTnQQ",
  "key30": "2tpN2Dd91MgFELc5HLye8EfdLFzo5CCeFUstkcow289sCCFafVemS2nK1qjCfBgtn33cDRdk5tBh8djtFS7NZdNW"
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
