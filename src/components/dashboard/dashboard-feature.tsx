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
    "qfZ7jXVRjqsN16kkpJuotivfTecpTorZtGiiGZBbJg8YQTZ3cFHewPm28PskNZLeTx7Dc8HSNtt1ggGSZJqt3QE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jFKVcwcXEV4kNHv3bjuedtL9XLccDazwAzE5Z1uhoYgJvUpwvMw8cLg9zPinGMmVpQd9MMJuD1ZjNGynbu7X7m",
  "key1": "3kpiqz4z1R4h2jGsRxEpf8bwnhYsmACcaFNVgN4HzPNcUae8cpng4JwFDNFGBpBVi1wqD3bmMoPHBsPTzWkdr1BV",
  "key2": "3UBxTdeyxo8MeuLmLsn47D9MCqJ6cYRbfG7LRF3f1GSdSnYMwiJifD2deA8orqTJ8GfSwQyGQR59HDhbgALKLGj1",
  "key3": "4X7TWkTosQRFi3ao2DzjoWyk1f3PyRD1cMjL6StyenKhWqdwSY5TzsyYzCsumxGUPWmKTk66vXX621UZfZNJ3Mmu",
  "key4": "2cujeNBcJczNrSQU8yDdutYUF4yRGRa8SkbQEBxPJ7yEtrCB3vEwQ4rGRJutxyaSuGhGnGL7Ko42u2GU2W3yPxzL",
  "key5": "3ArSs6J46aRWY9kXfQQJdV3kxHUaL1qMGwho1mZ6TDN3v6DKzRa3CeWJNMznagiRvT4LXVxgaHNxEw3aSDa9T26d",
  "key6": "5cCPZcBjNyQD78kpD1oa2pne1vszydk3wEmxEyGBDke6YPi7CQju8hhpn7R2kZitsvHzQK41vavMBhsFhoJUZhSQ",
  "key7": "3eFZXAak7mLR12iFoaRRnXxLNYsGdU3w9UqhzzR9wTFESnUptmDXBeYowSwr7FY51GXgEeafmNzEHSSeQgEztGpR",
  "key8": "4N6Jm2jvBSGjr2EXYBmkhcaGRdrWwmvogDyzukPrqVmcW53woeZLguWTLDkprAxEYZHpzEFa521gJA9957KmVDub",
  "key9": "CvoxFRM7KJxsGSfmn4yvCBvRLHoDMfCHJBWVzZQRXdDa2VdQbvAk4Xg91jEuBNkaCWnNAZuuhogEbBvHGRwz3EP",
  "key10": "jFhdCw4hbWiqjuyfmS5xe1p4TnLRVxD5pTbusqvKb5w14bx6UjPGvUtY5MC2f3Ls2UpwZ4Vc5MD4eMsrfaNiAj8",
  "key11": "34cH1C8FCtGY6TWzRxwnx9yFrKLhdkd8vcciPomUavVAqeYGBY9ov1iApBJNrpwJqVFHQppXuUmVJwF6tyREPcdb",
  "key12": "51gDmTtkYB1TJA9uamzxigorp1diMK1FJYLmrX8HWMJ1bLDVD4YTP56mt866dcDsgmNEhWiwbsbM9jfmoZrhHAY2",
  "key13": "2WSfNGacKTf1UUqxvJ2gEKbSRA4du4oS4KmxDPrf43rYrzTdJAtRio7zRkaukXrYounaWwhAkCQrYziEkhgCtdkn",
  "key14": "4NAaAvBUXK8A14T3LXMVgqqAJqM9VzyJp3P2kmhtT1vbSKKYeJ4a3NR2vC2TegrUxN5TtJR2Qxe4NjTTEGoHeTdY",
  "key15": "2wf4b87fJ6EnuBBaoB5orcFJAayK5oDqgyyuzynJPz2iNjeF3D8qWU3b9hVGt6ue5YWkK4XtBxiWryp7qHU9WcaM",
  "key16": "3XDoa4DcgXPCUAamvogRHitB37YYzvdUp544geZxjoMj9xJ74nMaekCv9veEVFzvR9daEnvJ4XEj1iGLiDLCiTg6",
  "key17": "46FK2meynRaguXLBaQcDfZvcQPB3RhgeP9j4rq6uhFaNgmXmSwQMiy91b47wDY4VYenM8mmt8smtWnqZgzXgji35",
  "key18": "pJ4S8w6JpbfQb9BMHVDsG7MF5Qw1XtYsxazCEp9Ac81vSXbkKo6Kjaj3qaYKh9ykTXBo8yqSu19KBq6ktK5Uge1",
  "key19": "3abrmATWQvoTjtE9h1Y1e9FRgqUSMHmRpHptTd7ePhVCqdX4SMi4TGf9zWY78hP2VD4QnmhjNdTprYdHaRyxNP68",
  "key20": "JsktTCBqmJa5swPfNKq1MtTd6BDQjXRQH898urF8Zda4M9yTnJycptvxB8fd23Vk69QdpTuN7aftyypZzpExo9S",
  "key21": "2BncLC2nmuZc6kCWmeSMaWxcuHEaPxFRUFS6CWxiHy2EG3JHR8jpEYW2UKgzs9Ahy1EbEFBykXES6nypkfJ83hS9",
  "key22": "tMXovEE8Xew9NoCxnTCb8xJ7ASsTVYc7oV9nrFr678DRwFnSFYRYwPeaapeP2AyNcZf4WG5SutxqcaudoNQYhxU",
  "key23": "xB1FFBut1juteZpW6KZqfpxNpkw4EEG4f1EdujxfC4icu2VFMCsyRsKksVgR3QoKbgmfbijEfLvj9bDG9MZTHPv",
  "key24": "kcQDNpYDYCBE8eDXYmYh4hq1MoPyAgAKAMBBZqa7PsqNB8FuSs7NjT6i89dM3CLAZ6NgDNiuNbrjqoSLjbr5xjE",
  "key25": "3RCGpv3E1rQr5mmrtWn65Xrsw4v3edgGejryRSfAkP1snkHaMFjhttUri9KcoCbeviDT6zYHQu1HQ663A63gDyYc",
  "key26": "2cTaKuMEYHCs8eyZ6mAqeW1v1wTDvDLCXStrQU8oX24V8i7PP5mVztVfkLcZdi3xs1MpVkJG97wiQat7AbyiHKe5",
  "key27": "2J9otQ3ZcMR9feuwx4ftMAHKDvP6XBJpAqshr1gJS8H5Zu2tphhqQMzdqwirPfNFXwqHjqH1k5KLZ1VA6U5YgX2L",
  "key28": "j3BDJjxvCr1W4neoxdnjTDQEm2qBFPjg9gSjvBD3GEiVNcYjf7rMHiYwWmEi7cAycoREzyqDKjefbCensdnTPg4",
  "key29": "5Waho7UTzrLvKU1Yzw4FB7akt7uLn6jtqU1XnjeNqbKBBNLDaSHpm9Don3yivKVqRmGeWfSm8kVsRgERgqQVV2wx",
  "key30": "3RSZ9WRkNHWAnBYQQCEFse2Ls3y5g9z7QZmydGV36wjQmwRfqg1QCS3Mt39JV5dkQ4KvJ3Faif7q7f7HCDh1vXQp",
  "key31": "3EBE3tvgFLjUHCYFYSSWfCruHHzkJ9H7uJoMQMpmkAfQm3gdP2srQ927JVjheMzc9voVsg28hkTsJdSKK6JNTyUs",
  "key32": "3fKno77Ts65nu3fMj6eRHHS4s791muVttGErxBFtbmhT97YFWfPcF5MNDMsvbS9EWCJpR3TnAw3KySBVnzTZRhgi",
  "key33": "4nqBAB43o51BizEtRKg8fsqXWPd2XHo15TLD937UfZTAjPfvQMmVfHAAP1jBT18CYtqXJgVAvbxXiD1wWWmZKkB1",
  "key34": "5bvAxgxNtocVh652JdqvDLvWsRkiPPBm4tPvduzSiUaLvgcqnz9Wb2pzZN2MRPy7fXehYAd528DVoq8LiH929m4D"
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
