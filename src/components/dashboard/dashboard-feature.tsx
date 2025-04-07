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
    "2Hos5fY7EUsJAz48ymH1DitrDdUeVygjP6R85ywTCRmyGHmCepGK7s4e6HubKRUzggwE7L9KDQCvgjEqaiccogiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U6nHYYoEJ7YJYycASgVmNeX6Kzb5XvchGiJhVmrZkNcksmM1P4QkBgU6YBnDs2u9p7tsqcMGZFB1Bg2pPN4SKwF",
  "key1": "4j5rHHeLH6wqZNGAJZH5wGpmDU5p1NpgT6GFMMHVyrbwhj8ws8fQRQ89ZYMP8twsWvVSoWqFVHwMFVLXniq3hSMQ",
  "key2": "4oLFQCkn8CyJTMmcNKQrpm99dV1ei7xgsw4d2dYEG3EcGvT8qW1t38LNvMvpihcS7gxeYzBj5PDpdCzfgV6FkraS",
  "key3": "2UqYbgc6CfdKiJtDcZSbohU2D37svRXjVgEs1k4duxfc92xi2oGxkMhcvwTLg4EfZapXm5A4FwBVQvyQ7RJtsdeV",
  "key4": "4Ta9pCfY9KL2TYFjtuYG3XeDg6YQ77aj7UU62ixJ3TNuuQF8CMQbqrQ83oH85od68rBmc9dRP1EmyA2n2Uq6HeNt",
  "key5": "KPQaN9zYMuCbdJSSgquyCE1Y7ujAardn1pk2CLqcx9zFDPYsyx66oewGtzKYH9dy5w66VWm2RjKJUGY5s4Bd6Jx",
  "key6": "5fHn5GEPE8ktQjf7CsWgBH4jyKpwJ67GWqj6yzVvV7ANJgUqUXSvekZGk2aK28dnaJW27aj418JwaUP6MjRoQq3p",
  "key7": "3B5RaKda3GprKUPFjD9bMcmneXun6XKKaDPAmPVdXsGjhcSqMCQTezCBNp22zUZvKoJ3GeULAkLAPNfQHY9kdXd6",
  "key8": "t9hpDMXgRFFLvQGNxTBdWNyXrrUimoWa56fS6XNp1ZDzDHR9KDC6H5LMfwASHhn9SGpxJiGGwWZiw85DLbpRHxx",
  "key9": "2brd1yWSMPaVeMFN8ihMkTehSoZt7shYBFAWPJbutk2z8ZjiRSJiyW5kZepm4Je7rv2xaMFYA8bxHEDa4vqtA8mR",
  "key10": "MdVgrYDtBUYoBvEjKAGtTQUQRXYstPjLGqnrXcgbsaijpXNnVYsvQH7WisL3JY96HTPzkUtxYAAzGzFSPpQA9vH",
  "key11": "4RhtiiFH6YKyZcaVdkbuWpyEHYnhF4ez2A9QM7jW6s2Cqnjgy1iXAXF9QHfSsoauCvaUzWrYNUhg9JJHhy3yf3RA",
  "key12": "4FT7cz1MVeCx7huzr7gW7ZfrufQU7o3Zm26bbqjR5sfrCvDS2UJTtG7wzZGZtRuYszixWftEdsVj9AGn73oeDniq",
  "key13": "59ePozYrWTDsBxjr9dXhBaL5isDHxW6d76miZcttJqDQZmEF3RJ7YiD6YGNpGyyNqNHQWFXdt7Tc4n5dG1Mrzy3B",
  "key14": "4PvhJqfE3y1hgVDvokjg17zAY1QiD6QKUDnHztP9QHEzxBh8YWZBejJv7R8RjU4FoXYgcYQRipeapQ3s4xEhLGzF",
  "key15": "3SgqXxZAy9EoDVMVPWinnVtNoMNip3BFJsrYYVextJbkBWXbyazoBsWHU9dDk6DL8nTuzSBcXfiZaEjZZe1Fbu9k",
  "key16": "5ruL3Ewc216XgNEpM5oy7mwTyjwNHQ9FfMpCbvvMXoCJFYWaH5bGrge3eaxz7hZUxyuepv98EtH9Fr5Nqaj2vQfe",
  "key17": "5DBS7Hg5H8mHXXGNJm8cXg24ku8kiTAypAYpM5uT5dKosp8FE2WE2sU1wdrSTCZcDc9Py8fT1eA53CqjDAzjBKKb",
  "key18": "23UfMEHfAhRBCkj2jEocZDagL9uS1j8JYd55LPsGwKZPGERYkxziWR4NNPRxmosAxCFgZ98qRX9fEhxvzEhs3z2y",
  "key19": "mBgjLarjaTs9etX7RRA2ze6iTHeQdj9VSdBnxbsDGzFamSzSSE7ypsPoK7aYDTpF1x54CuMSnSbd7pmiGvBTkaA",
  "key20": "oiZLmmebx7x4vs1gUbZqmPHQDxcnYxSjpbCTRet3MekCytkp8BUXNWcYNjmrUo587KpJGz4kdBjAGfRRmhD8Qmv",
  "key21": "4bi17c9R2DaqYaRtdQiqbnU4vwcBhuDT4kqgpCr3NMzgpDRdjARWPhLBRFkPhJpg56Pbu7xwJ9uQLqDXLLNSMXCr",
  "key22": "5C2MzThMTNHBXk4wX7FnWMVhKPRtDvzcNCh5LLH19yy1A781AsSkKGzs3bnthqs8PobWX3uVx77rQzvvHpdy8Dvg",
  "key23": "4aPnubjxiNF37b7v5DUnxyjaeZb7MT5Yg4rqxogEsPAvurz2XeQc816EaAarhXSJm1xZuC64t8P7wk2CzTfwGeFX",
  "key24": "9BUGeecpyYE6ebdqjomKgp6DMuv8i6XhiA5NjU6YNhvz4YR8uvSocoRyM3LBcukVtNwyYQzAZnNhwwLQKNAigGV",
  "key25": "5e1vCpVtRYhVQDuoBKEp3mS1C6JfuuUGAVeSUStUwzfrqbQiCQGKea79HLjb9aE41Ztj8y2t7iLC5sxgvDmjZDKr"
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
