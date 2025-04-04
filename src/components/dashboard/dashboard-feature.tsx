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
    "a7q3d93tJ31CzCuipCeZ13tZkn2wixLLwVR7k4suqsbgm4hXtQbNYHoVougAmzDtbQWvdH5JLCiDZUQkCEizS9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h95xwmMah3nXAgjwh5cQj6roc5b1Rne2xEuzUC7kBeh1pbSCoRcGCWvhb5agJA7K71KoDUBjJLiidGfUESCKT7N",
  "key1": "4fsbJLCRyqxNrtVL5zkgVudoUB2kX1pKseryJcBHAumLyLs3LR2Rm4oQNBEnnaTWra289v9BaE9KoV195D2VJiZk",
  "key2": "jLqykJKEDNnSGYLTYUug45zCHwRYR4wfjwMYacnF8TxXnVJx95uqdb6wFNXyYRsFaEL7mcZFnYaVqgzwMCoHY42",
  "key3": "36Nwg9pAMyGnhwvaXvZr4hi3JghYDyFjPjjWURVVvpgsqA5N5DpyeFHp6wXJWwYpfioL1BKnTiJ8MoxptbddTPeh",
  "key4": "2JboG21mkrKk5tEUVNaUtq8M1VJzoDGvnnwEYp6qHV815U1YuePX9M2XCpv5AnynWt9yaTyNKQdh1JUNL8ERnQgK",
  "key5": "4SsihkwtmrTT8SJxW8b6XWaeP6SectWqqjUJ1pAw5cAssE95TaPyHDtNag85zJr3XEWqcgQ2xA8eikh3DHmRjuEt",
  "key6": "3F8ByuSJL6nBZfMXB2UrELBB1L5shM6Cu72mCpPBv1o7vAJeaVA1Jwn6C9Ey4giDDQuh5PjXSTamMyEkmLFaUvRo",
  "key7": "43FoetRFMMcad4e5ZS2B6FAX3ACqTY64TDV1WHC9y6ToBGi91qiqxestfXJy8a1dNwUAFALZ6EpfFBbfnnpXnryb",
  "key8": "3E3jP3awKoY1FbZMY6Atjki79cZEvbgTXyudktD2qhaKs33JoYWjT6NkK8LJoVgvneARi3Y3S7XJJeVxZ6NKsYZK",
  "key9": "usSCugAvmCgnwBmQfj5ff7PRg8XD5dtqNxUboayejaRavTbMzt7QPjqS3NS79SuZ3qGCpan4qGKwkCGYgeXgyZv",
  "key10": "5thFZnvKbR574V5gDyypbXU396ThX3jUYb7TeZ6VBTTWrrJcDFJFTxw1Z4HY2FVDYxWFAWX44WFq6Th1zBYCWPTF",
  "key11": "k88pygz5vZhxJDDJ9MfiEbybjf7mnRKN1i18ZpnfSkgB9S68KbUoFPkCEipwdwgWj1u3TDPbBbTCqyKvwEhQWia",
  "key12": "2a8sTPVEcJD7gTqimSuJ3EPbAodBkqBiypYT71HyYmuoMhWRrGnMbbum5Vjfm5xjt1uGZZsgkQKhsnudyMwMxmSR",
  "key13": "2YAz45SRbSVd17LRhm8feNHrGEhgdNejdqUh7dXrc72z6kD3tMyw2uNronMCFM3DpJrVjMrjDQwSuFc2C1Zv7do",
  "key14": "2hRfaGRh6mpqg2jbBk3Hpx8HExPFLzEW6ey72DSUnViKhCsps4e9aTkPDAJo7Bd8Z1yKxgamgoE7L3MPamaSM8qQ",
  "key15": "yfjjDk5RJmMr1jR3SEAsmbw36yyKqkNSv5toAbNWNWSdMgS4FhAPiwoqMjX97nJXZaVkDhnhNJHE536GWf7qe9r",
  "key16": "53EkmHDKmLLtT8BvZmChY9WT5RNVsgWaZB6a3nsZmSVANMhLkKEQXaVZNVz6gn6YxavehvUdsQTPy3ik8HsU425q",
  "key17": "BBCL2uESVmL7AMPfXCDZKtaeUTgc6vYH63KBVB5VAmi4s7jXc5ZUrVzWykztjaD9LkPsjcf2oYDPQWJEMkVfKDL",
  "key18": "37SgH3ZYU1xRrzsdPRd6oke19LA6NxS18iQEPn865xeSzHCorFdQeddyD4sv55TQwLssqXxT2hhrwFuToxn8BvW3",
  "key19": "rFBfB2Jwha1YTRq6xY852zJTjA1sKNyT53ntqaTdiJSHTsAn8ZMVZJG4772Dypm9z3BBDmombZ6j6svJGoV3DQY",
  "key20": "RoY7BDqgmg3Pwe6zbsbYEvtcKwiFESWAuaiGvQaqeckfRTHdKxHVHcvMcCDjEnW1CPiKhyeak6KiCvjZq3CRGzW",
  "key21": "47PVYuLsVuus32puax4R3usxeoKijj5psqiBT7ka1kR3iqtBWP78juSRpu2BPtyZcbR1Y2wj4y3KM9Utr6r4hbkm",
  "key22": "cv3X1T4F1usggJZY3WCftT2CQBR5Avhcz1iK88yM2grGrw1UTko9Z4y9W8EQwdTu1t9mEgjroGFFrRHyiET253X",
  "key23": "5HQg7zgQ56xYsqQghLrfYar7jxwNJRcVikkt2dPKEj4gbovo6ELP9rZrxZKgPrmDWGFj6e8sJ5eUUzYvjGdCnps4",
  "key24": "Psr1iEPTTnSATafE8AYAuNrNHYTE7UgREerkcn4D3AQGXYobwaBhv4jUPWwEmhZQwEcXZPhFLz1qgcuyHDQVEZ5",
  "key25": "58Ep61rvSK6Zfyi94h3o2k9zUJWrckvK8qj8A7L9NXYK7o1NNyABNxhfVfQeguvJQTk7cjhGgorQtX7oitgVoyr7"
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
