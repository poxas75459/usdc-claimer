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
    "3byjcewM74UjjBnpvqwmWhrAD6CjNs8BxYK3F5BACXPUXi1CHWUXviwtfCmRUzDHmmTt1Kg1DNpJXxi4eBe2FPdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k56JnKqrhco9W1qDW1ei6Zf9dcTkVhqjybQdagtEFZvfYATDbQcgS1ah1hjSCAQ2oWQ6c9JDqQLkWX4biLBpk2s",
  "key1": "4xhykYVQgHhDh6w1rLWE5cXdLDbfyygjCqpejwZgC91rA1hhZ87Y2Eb2zsTREo7on2WvLNNBZ5fwY6GmKZ3HRre8",
  "key2": "3DswjRc7A3vLr37XYJPP7HyDpkMjpxj9QLwZ1GjC24ZfBpTFcyZBKsqd51HPsJFUyn1gwzaSEfTgCC9b5XoDG5PM",
  "key3": "4no5yyTFBQALuTUn5M6WipteCwvMcEL3sAe3smYfCxhYuQkQzjcCF8CneeiVDSZ5wpxDrPCKJZrJrRDuQ7Gio5Lu",
  "key4": "2UFumpruVWKf2rPsidVT5RgpT1ZauLJcm3CcemxPzPUMQhyDCkGLjUz9DyfvQzH9W3qHACtcLxckAipVZyeg6BfJ",
  "key5": "5knopG1qvxVJfMyxTXBrPh386HtH2yXxFm4vwhUf3eetV6BT1fhtYnVoGSJ4sJtfPXXrhkBDAkh5BMYwtqhv8wFP",
  "key6": "335Aj3TS146i4buSAYKjJWKirCTnVCcVjx84qTQXdtRb4zGU9KgzYwChAuhqeC8ewrgxeM1Vtx6PVgtvQ8sQvf7w",
  "key7": "45hvyweRA8qDMampn7yKEYiEZ8mVB5vrGYK63FoML7YizFg59YPLK9zzRYGfUnR1mKx8QetT9ujobFGPZKGceUgw",
  "key8": "3Vjpu6UDwpvzPfzmBkDhoCDW8cStuo95aDNhgdv17R2T4CHdRfh91yKX2jr8Jxwe1EFq1RnywaDd6mFnYrzN3wWq",
  "key9": "47SoRDXwf19MzMxEz1W4BQZZ2bESEqKAcjJC5DZZvEseYz7UCWK74Fa7ZWvpsFpivVivTVeuhVuMRF7kbwdWPPo2",
  "key10": "3uK5im7uDgeHQ57ZJx9tPnESVFR79zXgdpJth8PtEQAJdDaztet3tJJ6rAHdKvNpVR3dFNpnZq7pgwe5oQeBXii2",
  "key11": "4ngXQo6m7SAJMSSu2KhjwPLDfdoF12mkhJNwTcbtyWf3GMkWqrYXaGjwHLVqsD92jGESncR16nbQ4n7ZZE3PFYze",
  "key12": "44YFSvzzdHVuTBhkEH1zbEidDd7N4qDHrvB7oxzpfkcgCpB4P1mQQf8dRrbTJisWqWaYEaj1G9VjFRhF7L78YNHy",
  "key13": "2jookhSEJcJcgbqKPQpxzimyesKin1uXS9DaoPHN7tSGT7eEwpU4eUxsJVVto5vNyQ6yLBBv9dw5uymPhykAYad",
  "key14": "4UxJwSg4FgFPXCqmvNMNtAWxmTyQmoJFSEhwCgHUTVX9K7w31oTBYEP2Sy3vovnUPxh1hksvsumKCg8VDwosGRQn",
  "key15": "2QwerXLRGUKRYasTm2YHXrrwLwy4xqKFDnGWTDzktAmvBGoB3YH31qv9556ckEZaeWxrT97Z3rTPEU2Wsrt5n44X",
  "key16": "ixazmvxz3vBNbiViaaMVJ4c9Do6jcsDkymAiDLrEKc9aDkexUxi8CDgxKLAnbT6n8moG8cfeyVJ4svAXoL6kWPr",
  "key17": "26CQXp1WmBiJKp6cFPTdbDMKWDAeuCDxoQ25xTAqXdZVaTfYgFYDp2nifroo9CD7STSD6Jk2DZN1QeQQqciwQKda",
  "key18": "2sBvzfC3PrPeaibQ2AcdTc9zt6XhEv49wBQDoWFXKFmWRoR9xPuLdax6pxUDWwkcMZvxScpsReCXcok6inLH6ptM",
  "key19": "5HK95NF4pkmHdnVhFZmDGvkxTQ4kjpgrzZvTSDzBCVzLfLgGimXVLzcsFsCyfBk28kZ5EBtFFRbhdstzMRERou52",
  "key20": "4sjEpDQLkgG9sjjZyqPto99UgPzy9aZNDk4muoRv3dCvQpWDwqCajxSA9XmEae44TCR6oWhRKLFVNHUAxyFkvWn2",
  "key21": "5MwobHGEZdM3kMkRuh3jooCmnxQnzePAx3c4mYq7eEdQMzG5sU6RCqyWqa3vcaLnrDBiuxi5X5zPCQDnNMDmf8Sv",
  "key22": "C4JTcYsnLW5FWR4ZFJ9cGF1njW37YYo1SN28cTzt1hbFrjLkeCrv9nLJQG3yLHxqYNFQHMS8ugC3DDXGzbC2kaA",
  "key23": "34yan7YhFT19Lx9wuMjs9JsjXYHP8Tsti5g41rGyTXRbEVQBzJyAjgdGTBtms9zBuG2AHHBJYPpn1yBasagGP6hg",
  "key24": "2hT5LRPRyesLtRgBH2oQbdrNDGo7nZPjb9dsU8auwbhofby59F1aKoJA15iHHya8wvQuZDTNFPA76DoV513nDE4k",
  "key25": "5S1Nstq7YBUePqkaUqHm9z6UCTLNMJTH3VHcoHE5LuSsTZH8jhtJWtneLXcdtUiNb3qeqSmeoyq6bVWRASeLUaHF",
  "key26": "SQUHEbYX15NpVQrCuVA2xjz2euGU1ZXeaSUCm3Z1L1W23fGFVDtmbdqHQ4gk5TgJ8b2dwSXjrsbWaFjLPQP9Yr7",
  "key27": "1ANsFxWPH2GpNyCbNMjwcmBpu1UjXzHbWrnhhJ7eeivmibs3MPtqg2vvSo7qUMNKwaW33EoGcBJgH3RiEHH7ASD",
  "key28": "3qnPDqEyWoDo51xQb6Wmy9BnvNcE2FNWUacxbLe1mFR8sueasC21PV14H9mZkqeSjheNjx315mJDY4iyQ3Cq7tSc",
  "key29": "2JKGtQ7WUxd3VzNAtAJbgdmkedo7xY26dBozCZEABNJjfD7QDPfviysCwEMHG77P6a58iiwJWz9am1i6A1cvGAFN",
  "key30": "5HaWfbD6Vo6ZgNX7BGeajMqZthPS9gi9tVqPf9QiYxETvkjsYZXfQFaUy91Brwxt4tWxThHWrtttmJX1kuZtJP5K",
  "key31": "58wkH4XoLjurvbLodB6xNK3e9yyeV9faY8dzhABwMEwkKLyUR5U1UKQgXphV5FndXvPC6wqPSxhEn5xJsHs1FjT9",
  "key32": "2PXoFxM4X5LkcrwwgMbedSUrqrqygh78KShZuL2i53CsrFVTRr76TovTn97yZKGUMZq1UeyGyJiCJcJbACZnhP2G",
  "key33": "4nxkWU4MmaFPpzLRpeQXrmtMUj72bsL9wpRcvEfDEgoSqPm5jsfqCKVW4R1UShLGm67c6Gixpy6S4vmZecQgyXGL",
  "key34": "3NqdgoFrU6fiSBULfK7Mr8mkqgxoxs1grLwSLNFEpuz66zh6LAwrxzW8nS8JTCbKCi8FN1az9qLs8BeGhRboLBBS",
  "key35": "3GoKze88gu1d5M1UzyaouaLCpYNfNap16hcJwAGSytsHg83geFAd34nmzDbMC8iTRdU3qiEfjrUPhU3hU8hde3RB",
  "key36": "XzuSiPbFBwSWL8WoFQoqESyq9HMLFatQkBcXg5ToUoPU8uVKeLweD5ar3Xg2svKaMEDq2nQHXhMLtRLqvAG8EgX",
  "key37": "5U1s9nKkmsGLLEQGK5YJ29pah1T431ZGanPcfgtGD5QyhycNfPa4xZfsdxsn3GDh22izHhMoCXdgoEuihSVzo1zX",
  "key38": "uEiXH1vYkFywT8sPbYouSSi5Mh2RxcnxL1acfe8x5RYmDXhMJ4rk9KvWQvqxnaSqjSwrpnsQENNi4h14EkDwXmk",
  "key39": "DDr7kcbKFjC6h7LmJvLTAhrJaAxYMX84ipuKmFKmR7BSJcv98SoLumPPRXxQzE99JauA2tHpfYqgdqQoFmfWAy7",
  "key40": "3Qek8qT2EfNAwMHW897DjEGabXuC9eD6rAUNfdGVWhefgPPu5h9xZV63NaLJucQbqYCjZgdLCHKMKrJuYt6WGqbq",
  "key41": "4eQdxxcJ6hBUSnzGb6SbaKQvwtQnzSXKTAGjF6gGqxTKDtAjLFUEvtwrRdkpnuB8LzVSZYomFFS9SMQZYX6T9nxg",
  "key42": "2jEekR9GV595zuasAz8x6zsndZgdD9Vfqh4P1CitDUjZuafesWJ8T1MrWQ3cJFUTBBinAVk9cQwSzqaSx7pQnyYc"
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
