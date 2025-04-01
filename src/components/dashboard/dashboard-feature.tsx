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
    "xG7EX6qTzf2XuMkyZ3wthxAGK3FPczffVuzdNpWygqooBJpE2LEGGDxPf2BoQJDPjmNfDynVS1f4KffSz1cjSZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ezdxwaZuLJuFU3Ntsns2NT8H35VZ5TRfoHY115VKYuuofqqxLLzLGewXMaA8ADcUtZYzX3cre7QLTLuQqfk74a3",
  "key1": "5fNuQ2TwCqmZmPMo9wc4vWepicWski9dC5uAHnfFRjW95eJZSeiinQuSEoUoWdRTUBXq1Ldzh8umiMjWH4d4Q1CU",
  "key2": "5vWzVi8DyTnZZt3cyW15Rxc2VQ7fAWv4T9eK6zz9gMyYBtTWqBBJqv3mayF8HRTJkd2S5r1Yey37v4vAL1ajusUY",
  "key3": "2tGbmkskBQ5UefVe62en2VzijdTYXR7urBuW8oY3YUe1NKvUJKx38PhWsrS7eRW8Xe81RdVzfrCndCjPmHcbcVM1",
  "key4": "CaRDgFEa4wXmMeC4QTRSvKKmpCe8nKFwkfhsYicfUqFyPPqB2ng1b2JUNvPriYxzUpF6gNAuMfiwKZ749EmBiv2",
  "key5": "3eWZRH9Lyn4jVaXF35J9aWDy45fXPMD3fD2fS54LeqUDuHm84dzzGEpkj4dgP7EGRfNJ5v8fCnz2eBgk6dozCjjo",
  "key6": "3SS8o4WAJxSTujfjav78BnB3z59bt9PqkTEePv6U6sbhd9SKoUros7WMiFde9333zeLQRHBaQT4FBytquXjHxKxm",
  "key7": "4DmtCDgswJKdmdsY6p8K53Vkng1JNqHEzUguDSQc4cQjdoGSxTLshCpvtkThW7QDM9h3371dW38VQ5ZVLboGnikM",
  "key8": "57xeAkRuiLoqpeWh8M9phiwVXcPX9PdRwjwayXfoY5b3XmDtchWvUVcREiVjWFHtcjLD1NoixRrVGdAyGTcwhYT1",
  "key9": "oZ942DDX55S46h5KkJubqePymQzCfnD926PQQcrLJ1RXpDcDiVCSZiZLpnJvUpDJr3YhRYVvMWpFtZ6Gp32SssP",
  "key10": "2BAooCiPa7P2EzZ5DduogGUfnTuTaxyfGiQ3X5VGigvaqfQXqaFG7J7nNABbma54CNHswPfZZYbkPDTuJuQxjQBd",
  "key11": "2q3byCuF2YXopPg1gTQqHi4bdU3ZCEfU29fwxQkcpQxMu9CsvUEFnoVBaTQFPyuFgKKPGmLkSzZBQGm6umqZekvE",
  "key12": "59UKz1JWHgUjhG1f6hCikr4LAzeiLYxrXYvKisTcy9DPh8Vj3yykRSAeGYBqhSPqym6oYoZc3nkiDASvE7HWbFjG",
  "key13": "2AzZABC5yJLDTXNA2H6vGoffpYqJxCBxgWvrFhXdbBySyejgXQE5vwhVJ6RhgL98QbpY464pB1heCeEHfs1DjeKQ",
  "key14": "ERefBfZPBPFgG1jyHmZMoUUjdiPLkUoHQfTA2eeSoHMA5uS16XsPiqrN9c7k1WUnnN7KQcwzjwJxh5TP9bRyM3R",
  "key15": "2mxQpyyLQYvqh9aV7eCkeoUiytbEBv2eoRzoxTAPNhoRQrTHUApPcNFBEAe18j7iukX7U954WYEk2XGdHtbW4GYZ",
  "key16": "44z3Aq9dttBQpmNMgcvWuuvS77vYRN3tPQZsqqUfh9n3jp6pTdypVUSPhzwQKZfuh2uZxUeM49CypagC1NWnh4Cf",
  "key17": "4TSSdcYgs88mrrhh67GBX6eDjww8dLyDvTQ8Qy57XqBH535LrbkpWKvqp1FykEBdCRK8WAkzWkp5LotUg6sCTJaF",
  "key18": "2YXuwenguoH7aPgFRh33PShNGLcfpwYDwdQ3xsEHofAtPSFck9VcJXAXHu73LZSqgHMkYbW1573dzoWUWTvuP8Y2",
  "key19": "26RJ97yUtN1LwH5LfU9h48z1mFN8xPsNkxPHqfcoa1uDFmbJFqLnmNRptVyP4naKSwj7TwXy7UfiiNaAWW7r5Yae",
  "key20": "FdrLDG1nx76VFgavdiXbHGM5uh9URq6bi24huE8KzJ3DSt4se1r6iwvrTkXC95pwFUmuBwRgpFhuH43ysjFuAnG",
  "key21": "5bdBEqPY2QKcSRiDahqoAa52dcSrgYafDFBZCsdhLcxJpveLxQFFCEQu4AuNPirpzRTXoZhkoRqZkUBhDq7Qj4tW",
  "key22": "4ar2UfpotEEErbjN6LfynWBLsNjzzcArt9YrdJU2sMtqcJh97Ap4UqxNDMZv9CdCcWV7sWn9F8jqyFpwUooegm5i",
  "key23": "Y2hfdL7SLn9CDmDDCHAgRi6d6BPbcaoZXUoPcHJ9pyuUVN6k4X8jSW3vVYhf61MbWfb2bo2TaVpKmc1uct1vA1G",
  "key24": "5TX1oQLH8KFrdHNNkWJVPLJsPHnF3VvTAwM3qtF7bsSGQaqprMxDa452Hs3iwNfXDHvQSRk1Cq3MWwVs4yd31VeT",
  "key25": "39Vh2pLo8xdUWnUZXpPc98CVHdgtGXsmVukAS8hJXrMCPguRqGTXetqHxZWBqiLSBc3qywPPv8rY2teHnRFBRKVN",
  "key26": "42AJYszUhPUQEHatWayLzBWR7rsrtaH4iTeiRpGc9mMvHwDLqtzNb5pTnrMcweczYAkfMQNZAX45TgG6CXm2P5tg",
  "key27": "2bafNMPH8gE1kzz1aAEGcWdueFpSVig66EuPDe2W7QB9HtMxHGEieAV1JHGMu5qwRspzhnhMH3YffyA9ftJMtTgU",
  "key28": "4dRRsQKfr3C2TyQwN3zRoPCJQccCKx1DyREMRLLWE4wJETXvADx7e2vUFt4C38xTEDmGuef7PZR2QN4N7mhfHcbB",
  "key29": "3gWTBqUJsZLqBBtAFkSJvKb7Fag7cCP4wQq5iAwLvCrUK3aVjGrJ1FjpzUVbyU7z1mxkfjbMVHJ1jLVngLkZfx4J",
  "key30": "2iiNCJdkocy5794Ui2LvCVHmhK9ggGi6oyRSmxznwDvyKPNkKfYJjNzfzA8DHiMtY58JqcGwxmUDC7aX2gDBU4HY",
  "key31": "dh3dSqR1ZAummgnLB83xHBXbJYbeswhRMmE51vn428gAdQy2TjTaSa9rGSfiQvKfGZTbbj1rErP6SnA59q5bZYu",
  "key32": "5Jz6W8rL2825rPvFJFSAFxGZ1ti8qkHJnXbR9GPgbjDAkveNsAKu6jgivkK1t9biS5xFBXyDVzcSm3pQKEHCv4gP"
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
