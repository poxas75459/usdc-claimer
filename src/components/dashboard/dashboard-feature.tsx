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
    "4kCABa1FK56uZsBAYU2mVVBv7EsmQjnzNd8VJANuuRuULxDnNbGb8yHsh1kebM3fpUJFKrXYt9Epnf4oSNaaxBAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCKqTqMaiwGN6UDioL4sEBXUe2Hy34SfGmXkaL4v8Pc3VnYQdjkNQeqg5KH6y7EY1Gdf1adTxi9cQX9x73dKeSm",
  "key1": "5ULVAYjhNiL2oBX323NZSc9CdNDUjs2JLF8juS2hnWucorS49ekq2zxCMpK1ebg2vauAQccztdnbaFqshFpqv4Go",
  "key2": "2kzSFQmZL1nRMPQoEMe4SRgagPAmc6bXiYSbGtwatbSur3NyUwVnyad2e4wUvmZdb1AFBxUT5VQBfVDnEYDTQAZu",
  "key3": "3Z2w4ZuZcyZSiJ2J1iGU8DscKzbzSQC3eyUvAioQTu3c7YgehRhcjyVEDaPb4aguVUJweHzVhuhEZsvg4UJTn62w",
  "key4": "2jbutcbHRLhTjpTBcezF6bVjLRGex3xvAnztY2a3e1H5rA2WELaVB5RCmUaoUdo2fgxia3783ix9RFsHLtY3hN7L",
  "key5": "3AcEijY2seVvX9Y9JFXTfcruhD3HASWHXkUYFDQj6siGKRxfnzsv4G6N52Xqmp8JfsKue4WcHoRC4JbB8U8W4gDY",
  "key6": "2BjiYnMFCV5qDAe3dXsWinUS85KwudpoENd8xVJpj95boiyZxBT6ujv9xCGoDSr5cPxTWYvMSQHPMbqi4NGUAXKM",
  "key7": "5svTB3iEp4wVTW95ZfnXGsCufLPhbCrxkDiNo4bwdosQcpdaZRJ12mepL3PFpW4WaRrsrPHv8UF6x3DXyDXvdJua",
  "key8": "3ESNsPHEWGm4NYG4oU8UvZWncukgCbbwZRxkNXdG8pqG5AQcE36jnqYTEaJ3T28YqbQ5an92ixntKfhHjnAqU3oZ",
  "key9": "2yZ5jxyFJtwrszSC6oGL4uj1meR7NwjhZYdEPpYgQPLJpyX4EB4YMbFaZfWRHtwoBuc1Zsxfu2D1rd1FXV9H9MLJ",
  "key10": "2NR8iQZpJN51FT4zZT4bhsgWKQd8qhzELevC4MLCkc7MFiTxBrsLMSRUpaE7XTbdwpodZA2MDtm75vex7ozmnRaK",
  "key11": "DjxzzaQFpbkijsy4RUyVGYymbjhRCbz9Gte7YnrzbmcbFWKH6zFMqjztqpPcMLCBrwmvKMVFJm3F5Hd8BfVsK9G",
  "key12": "3oVekC8Ha71e6FJ17NK4FhperN3LNEV5fbkuES5FvDde2RvgLdRqcFSBrCacTmDGe58egsoy2ViwPchyLZN827Rc",
  "key13": "5zE85DqaEHX5XJ3bMbCumw49fztU2zFBfxwNgm9BXE5hWQ8b87Sp42bMpa2vs5F8e5FzUeGmndryNyopE9Q2R2GM",
  "key14": "3UnYwmoWvuWSpW2HQAmY2u37VbUprNFSFfmBLGNDnnvCbkoeZ8huFk9xF8XUGtshVGpKAZAUqsDirNkSdToWrXJP",
  "key15": "uFLbiGNfVWQmEuT5bkNPmB7EsXDg9YbRSQUPwmdHvJS6qdKsiD8f1VfUMrhv8ZU6HihWtNR4hiEiMQW6U6TJkkA",
  "key16": "26oYbQhLdX9SRsPmZUfnLvHBivosM674GuBnE1Jka7cxKaDwACCTQGSbwLrcm4heaatiYeVo6SYJx4ADzetBPLyy",
  "key17": "mgsn5Dxo3q5pSPuCziRvXVgkPo18YPkMnsLfAbfmU4afMNvxBNPkX31UwzZ6V9di617717WmM4gk2yib3un3aei",
  "key18": "4uHhi6TK3WX4yFZPjSM3gzFg73fjYpGkwm9fTMdYjPcDTeetUD8FjcnieemW95Gci4A7eA9XPu54pYhdHTUUntgt",
  "key19": "cNqbt2gXUGNiADtn6sgsCWJZMu83j58m8148yXkbs6jcVy3LR69R5SK91nfpmQhDPSrzSuYB8EJvezRvtMXgVu2",
  "key20": "3r8vBRvuwTmYUZk4jiTK8PuSAxmKKcG7bPTbsdczDRcYHsoCtW24eR1RrXcZSBV2xTngiJT4ULDprjkTU8R52W5W",
  "key21": "2Kn9gcuyYjUKCWJePB9tks3uYYZMyuDuk3QEzNUhTvusGq2Ram1ABbr37jPpGtT2mi4DesnvoFaMVtPhKP33Drw4",
  "key22": "2RVT9eb9fsV1xtX2Uu8fnUZ2xSyS5wVLFfSduUczq72apmKzKxM8YzpqistVYqniMUh9BVaKLWPoFyJ6UaSGh2YE",
  "key23": "2omCiVHtJCziWVV4RddJMq7LV9tnRjyQNSpBK5t7sraSQMqXT2WygUgvLN3ecozUAuui6Sg6wquwBgG6N5vswNja",
  "key24": "61FZRZT41oJ8B8hm1Auwgdy5JbUZe4586YoQgUiLCnEyUUVmvjn3HWRWSB7CRZTvpWBs8VuPVha3HPyHpSC6Z59s",
  "key25": "apgx8KAiYP9A61mfSsEt1GnqFhzWsn1h3DkEDAbauGdEDkMSHEQ43gkqxmV4a2pgZUEsPPQ2JtuMqRzrKWxhDpm",
  "key26": "3WY17sJaNDAdyQpWPC6xFbHMJh4PY4JKTPcXgtpCCUtDskJSSvbwfDvL7PibD5Cr9CkmWTXHcd49jVwwYweDcTtN",
  "key27": "MD2uKr6Ei4nm3jmC51apbqpb4wfPhWRvoUEF6uPQoMGc5XpT1G4BreEHoCzDtiPQWZNNsfmHvsPGepra7kWqoim",
  "key28": "5ssJCHGK38hspY573hRxX4pZ8GnqqUmTikkdNEm2NCdvJP8L9Wore31PYusmGVSu4aHk64EY22ipw9h2j5PnyCBw"
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
