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
    "TXxZdTb67o7XKGM8Lzurb6bJithgU1uAnEV7pB3fr81qEMGhYkymH1vLqx5oYrkChoi3FZRYthfaE2TFkGAuoNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5pyXaDUZJoXkjV52AktcBC7HAP7aw5RxwXZ7aVRH49csizV3KdMi3xNbBRv63W2T7PhT3zF2CZpVxXuzVcJ27Q",
  "key1": "2vBcf8EJbMyx9qpAwKWFhEtvM4GJsTo2GTtozcx7WqQXycUCwVLqGNqE6p9AwCvmH5uLxadD3H6do1QqhSMZMisy",
  "key2": "U4wKjbPhJuFvsxsPiZJ6DDQKyFZinsbhJePwvPiDKyPBQK1M9oHANQtYcN55t39SQ1Qti8Sf4KsavDtBDd3qL7a",
  "key3": "4fMuNjgTt6zNdbJosUwmbCz7gUpJAyBgCu5y6Rm5jqoQy7tbswmzsvcS1uUinAVm3xCsE3qmwH7dR4s7c49WHNNr",
  "key4": "Rj6N3js8NR28g5euQnyWi1TF4uMJBLZV5ihxgPdvbS4vuCRUfU1SSjaS5zdPQ6b4St7rojzgLpgCB2qMgnEzU1T",
  "key5": "5dCGaLBwLw4krotncWa7Y2PanvJMJo8N7BbESUKUgvvc1mqTu4Kjia75nUFHJQKbkToNZPeyFTiyysc9M9Jz3WDe",
  "key6": "4eFMkdtWapH86SZ87gsGkgwbPHrHYooWexdfyiNSh7Gvc5UFGyjevAM7Ls4QQdVQm5R2ja5FYrDqcS7erSFXJzWH",
  "key7": "58DwKC8v5jXTdvYvKWUipwrzuAoNB4y3eY5bQUjJZ41iS1sGgsdAQh6DgtHhKj9Z1RviRjBx63DJLqahZuZVHd7W",
  "key8": "5toRwfpDRfNYZraeixwa2LhSrdHbftw4KABomdGPSX1oZUGbrEs3MYVR9VzEMDJos6uy3ez5yaijgHHCvuaaDeBp",
  "key9": "5fnetnSbwwmhWkFnJVtMoFxrfskkuDTDf6xuXBKmzdcyfFhTso2jKRZiW3iXcVhACqmWfuBiZ3F9z18NuogFfZyL",
  "key10": "5xHB68Qu8hwFQbQ7iL4nXKAHfmvjdFz1mNTGPKwmEk6AiL22MAT8YnQDUnpbCMk9j4MgdsMvZ9HetGVeU6PDa9uZ",
  "key11": "2ABRQajR1t7jpZ2dR555zErnpVruv8Hy9mBRKRi5cQK47iNt4SoWfoNgpEDdMbE3AgqraEuNN8yUPBtyZCA7howV",
  "key12": "2RvLDTRWnsZ62ei3JpGu2eKTKhcY7gV22VWwkAeVfpt3RB1M9zeNpVRewa53RE3PoPhZZsd4ZbCswQ5L1n8TUMNu",
  "key13": "67Y1PnE2JezeDg5trFGHQ3au4sUWah9Kxf85fRierZeYFneJA4f8wVq44bCvFjpEoMfeic1ZUXGSK25JqTq5cCBT",
  "key14": "3hjCttnJMhT8WW4c4VAtMq7tfnKayV15wg3ZQptJUZGvPw4ZGf5BkqUP8KPRRoHxg9QFufQzVTJMfXeadAXSyUs6",
  "key15": "NfbZjzWEjr4yEUAjBs27kxfZPtmtf44SJjF7gLqVTNaBPnPnNwDAJZd2UVRj51xc8vN2K9XY1oiKSE12Vsq7DQg",
  "key16": "4kGNuUpr44Wgv7NmkKAjjDSfzQJdRVPPZALCWy65vxiG3AzcwZ6zEGBAKUhK3ZvQETnPc4Bz1TaZtrg3QZ1sQM1v",
  "key17": "2hAHbNz9L56n5cAirDoVhTWacDQMwKiiirrZZwJB3ESMvJkpbr3UgSsV88Zqee6DdVdsCS2EyeJXQYdw495iK3jk",
  "key18": "2o7rtefmPbjs8fm2gybmMvC1roShSAhKb2tLa2iLgZRduCEo5Zgeb9wZ38Hd5hPNZSgembEaCkBrJfpw4t1QG8kH",
  "key19": "qqw7UgKrNdkHbZiaFrJXBGjzhDatLnQp95jFTourzrnxyHVt3itwgWbyQu2yqU6Fp3C5AqFcoR7V7fTBnYfME1W",
  "key20": "25CfnRUv1LxRArCBR25fogJmcRNJqR7PiVh6Pn6V8qo89E3ehXKxBUXiZyV6HGxAWMWW7AuEhSNmzgXH2oz1KLB2",
  "key21": "2ijpBZR6Fixr8sRWKErNjnST5BvTQhQqUpMowZpWHo7j2soGmY12C9A1x6xJooCMnbVDjzr4XCmewBxfrEP8dtJn",
  "key22": "3hcAz5n38Uta33QeJhHRFv8UXv7zy7iYcSCwSaUCKR6kPjems3Kbkiwnds43ZA75nU5ZjrJWUpFTtkrxntxRoheL",
  "key23": "3CBENfWYh2bbChvWRCnPQEoh8m5sCb8Uw2wHgPBbY4QwjbjGJ4R8wNtdGHoA3SwWULotMwAKQVHifYDQeepssJRe",
  "key24": "61eawDtLE87DKw5nc5QmiVXe5FDSBk4iG5ektKzX6ape2jERs4a97tdNj8wXjCCUPDiEBacE5G6hETgviWEDMwcm",
  "key25": "2RJwq7LWdkX3TAykyrFWYWzMzxftvqDyRTV8uaK3jvmH1kgqu1v9zSaXRjAhb1uDEKy5FVuJc4sDSAab8rMVZj71",
  "key26": "5cYi7zex1P9UKWqYXx7qke1dnPXZXhuoyF6bj67difL64SAV6jMRmGiBnRkJqfTjTUdDf1u7QaYXSwpdZwcSffyZ",
  "key27": "4PPU9WnXWPrXBTvXLnQrTNiNP5zYd2FQe3wbyUJ8eZQbU3P9N5SNAsRAgRs8dMDDyppAv6T8NeKBBkRvWSAcNjGJ",
  "key28": "n8YYhQbneCqKKwcMhHZRiaAXoFL7HiTsFJ514LWd7aAibTA8nv2xt8fnpgMpDMYsY7B3Nky9VmJJDYJHttyZo9m",
  "key29": "28fabwTfZ2ic28SifyJdQQPPXBwF2DSTKjdqhVyazt33hfPzKDSi56fc7NpgGzFfCHL1zinjUZM4QXvPoyTfiMqP",
  "key30": "5BUavoo9tAg8Fviet7Lutfac7PCQJYTkBAto1QCruL331H7vdajTZt6oANWKezYdKYRHHPuwd9fSUpBnNFMd73oJ",
  "key31": "3wwkHiyMgeawREXjmesL5QDrgmMy1DPcrcvLbkuKYKHuni1unGdmSQVEGuxpQtYG8rjU8u75RbeobRcFq4zs67PH"
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
