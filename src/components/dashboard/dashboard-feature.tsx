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
    "4vzVcNKaw2JzQaePSEFMYYrJxo7vhaJZ1yQQnuKQcbfTamhERm3E7uENPGf7SLEN11nT7HqGTPgnXTWD5oUNtj7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXxnSN2KWQ5fdReR2aB4vN7ZaqZr8jV7WT2Cw6sFG6DVmJ9r2Ztj3Ky1ei64Sb1GpyDmKhPHMRnPTSLWJCMGjSh",
  "key1": "4c1FmUwugAPBLabe2aqvynrkRefrbA61CnUWhJFHPYHWQRbn2h717P73fiMapiwuuSQFm5iNGn2GdMZYVbEtsVVs",
  "key2": "4xQWfzErkzTR8jUe6jfZHkZ8JPnxt5Q5BEajysCX7mpTJgpPaRQunVNNznhE845ubudxoUXjVu5LMcEaaDUfVrE",
  "key3": "4oQt8kXQ2d3DKELKDxoN5fyi9Qi4LJpuRSfwaBSwWgQkhrRPgXNxTMeotBAKM8rqaLDjzLBrDudTqgFHjjyWXC8G",
  "key4": "SDLZScxuxFWWxX3H7bZSs2UnNkajoLKtju276ctXMR7G6PvhJU6NeCsh9j4Vmc7nArbigw6xQ5ss5hmg5GBJAMv",
  "key5": "2TQn2EZD6EoriGvmuqfw8kcj98JmNac1rpCsDoRcZTQqE6YUy84iSemEXTkJBR1MYZec1ksh5L4u9ajHQhnTj3YG",
  "key6": "2MzQuspqkV1uh1pfNshkut1x69sgry5DdzrYaJJ8yu6z5Z7xd8vYiG4JSjpWr1oMb4HPNNA5StTd6xLEQ8Ds7F9z",
  "key7": "4eFwLjVQ7YQwrmfNKKCjgM2yo4kTu7TsFUMCt5x2tmpWJjBrTZAaM3q9mLNj74kp56AGjpCtPpgZtJ9oTyEVYa1q",
  "key8": "49C6c3gtvFuDgHyWekGv4SJnnA7pH5uZPzcHLdNL5SstbaVjiEixMKo8miT95YJKBZk722pKXtSxi6hphyc1Bw94",
  "key9": "3sBMiEWM8RdNpr5H7bZ83KbPgEBsAnDtZ7bG9PihFTrmRQPtPwvcWVjPbhe75oWMwESJk23ozqz1z6kzjkr82jka",
  "key10": "2U7EPt2Fu7rk2QBhYTybpACgUPSkPQLDG1ik3sAPXqxGYDKJFWh1baQYT26rkUHVQzohr5ffAhZu2JrWuXZd4GzM",
  "key11": "25gvGMyhEFprUovTWzVSkz5wpNQSpvPHCD4tyTvijmRn3NyeRbF5YHutdbhyxtbonAtwNFg9hXphn7hokEgwXiTT",
  "key12": "45tPuaoSPugubWwyUS19Q5JY3X34jPSxFsSCn9kxTwcxmJAvCWB2J8qrdjA87zNw9B3MCA1kjnxpMQdBDHgiEd7y",
  "key13": "4c7fePxAg1FFMaddgbzJi2tdSoQxAJivAXBB7PGEZFvBJVymqQhZ2dGHFwZqwnL3gyTmjDegvXC3gvcXjyMY96cK",
  "key14": "m3SNpqCXjuAWskiTVkU2s1pYUS15L2PbmSRJ12ShSv5ZCqSjmpnoRrAaTkfEbWE9P4PnMzy5Z66E5jF8P58R9D4",
  "key15": "5KFBLEf9XJxhDM2LvtV3UWn54Bh5QhGaWhd2qmV5a2Y7UXWeyVZZuA5yqLBE7gQguWmcdJDPtuYDTJB2h838J5hg",
  "key16": "2Gp9qohAEnggnby7jppUswrhAHhrXCNi9s8rkU2K6pAZurAs1BwuxDDW2ZCMFFnZ2c9UtXDqxNffGvg6iFLqAPSX",
  "key17": "5sPWAV5QnQxBtRPGVzabHBL8xD29c1USKyk41sczaHx7iVAeGKAw4eA53tVRVZqAYhMq3cgah2KgJZ6cTWVD3HjK",
  "key18": "usAs46QYdXxNxPUiFpwqypD4WQd5GfggATYCA98N4Qk4Gc4kq5spV4YmgBqwjRyA1AfZZddXtCLLYXeB7Rs7qeF",
  "key19": "nHNzUGzD55rYG6W5kt7oDFHpPS1VqS6fC5YehvqSBXoCGUTV3pLsEK4TYdBxMYrcD2VSbRzEH1AqNixFCAGtjGU",
  "key20": "5rEJVMMCx9vyACMe2RBw5zETJRfUUF1ADSzcJhMQHpN5ETRMfVrvxVhKFXEQGQP3H1dBe4RznTBZfLxFZ8Ndbu3b",
  "key21": "4DiCcQw9KS7eiSnBbTV1VME9AzJexEFXtDi8VBfcpGb3dyyrjR6DBRASqLvd13yzJjq49MFhP1Snxwp6yQK5UtUF",
  "key22": "3xu2WjrPxK7oFh6ZnGBgZ5EKhdS9Y7uja36g6EN8LuvmMPf3mAMb5Hkvrd4b3CNMYDsme45kCJcY8Jvm15iaBREB",
  "key23": "2Vu8CWiMMq5WXRGCTg3UqF7gpP417rjqjYQnFHsvtu3dGz12pnK8nfnNjyWLQb1gaTf6ntxKDc9AtPabxULzF2P2",
  "key24": "4Jt4eQMsVHrYWbXd1NDcWC8khGViZ6bA96N2fr1e7dEYUTpeXgJoCGm91ms9ok2FkcsYA1LogCwyHGc4NXKjEHAw",
  "key25": "5CM2cNt7bnANbtjRNNr4EkhLbE6WHsodVoVcpAKS8Z2YhN6SVLjFz8ws65KYon1yEfUWFuQ5vvBFohycxxRMaEXx",
  "key26": "4VXdRDWXBJ3iiXnPruXYuB92JhzZ5jdYWFf9CCQ68wrix4RJk1gQx6ot1ULuQFLwfMPUeo5QzE36r4BvMBo6berM",
  "key27": "4Cs9NkqTSgueQRr5mePchupFThLkN3TBeSC6ouczKYFfa4hYai85hfai9eEnFvJwmFtSKnCi5rucwLRFLxDLphir",
  "key28": "spSFMmnjj9aVoDwi3QVSSEgQY3dzG8c6U2aWWmAUk59qjAuXLgn9gr7HKSEohmJmWE2gNyCCEZtYbneDzRBDwj9",
  "key29": "4nW6k8CDdK2YT2PTVfjRKtYktsQe9V8LKGuHpJ9NHuRZiUWnQCyskaBqvEsaCj5ZeftJorQUEVY52tMeZNtsLTtP",
  "key30": "2hTfeKXAx4wcgmXpAf6GyGyP2rBDqHZFADLjHdxiyqbF9TuUPD6VCFNF3NFvQnmFDwL72LsTQoFDCXVYCb5TErEU",
  "key31": "42H91EeXVSjdnJu2D5mc4A66dL9MP7wdgQnsE5dT7UcED9c2qeQU96Eic7SmtktrjeWrXhNKveG96nG5TNKxr3ha",
  "key32": "2mLrPKA5WrgAvVE3yFYN2mvXxNY2EoXZxaPUr4zjCcNqUY1Cv9dyqyDvuJqghpfLYH2NvMjjar5WAD66mDcNAKu6",
  "key33": "XhzNndWNZg7hgHgNJr396SV64W8ag2hgNsxRry8sCa6HczX6o7Ha7zHsH5cb9PKz5jDxetLqx4QK4vratkwo1Cq",
  "key34": "2jruXkW1oufLfpBB1d3eN9E1LoST6qvMMn8MBpJPPWVqLGzjsWgdZBThYj32gGkvXzRnK7pZY87Te8X37BgNYZx5",
  "key35": "22mYd6aFixsQZHyFdTzogSdEcf92qFHtQoXYzFCde2FvQJ6ueB4PWXQ9UjbduoJ6tw5C8GdSwqPwENiMfRCJJfaH",
  "key36": "58k1Z4ppQu5jabmNDtgWQQo5cajqJpV5Rhs1k5GeW29aSxknhRx8yk9Z2RPLkhatMTJA9Jmm9U83f2RyN6Zj2Pk8",
  "key37": "2EWFeaURXUERUQZRPWBMk5tWMYao1Vjw8qfoAsNj7EdrujqJiDtu49Fs4DKPR5oK4QWb3AynW1gL4RFcLbQUbqje",
  "key38": "KGxVJvsfoYLAkPLfyaweNfwjUek62fZaeuqAb94JGeh8AajWipom2FChVm9G6FNpoS3jMrzz5NUgwdE3VV57rey",
  "key39": "YVPz5X9ucnzvQqxJRGW1tERaUQaFV3rf1vjtQsatt8S1Xv4RgUDpU9c1Bag2nQHHTWVHJD3j3pqkkM9uGDn2k5w",
  "key40": "5QtyUgdLQW8tgbCs6e5xw4JGebkS8w886be2Stnmy7X1RgGDXEvUqvwYCCzDjGiHJkm7kKv7bhaDQDeavy6DUvTn",
  "key41": "4DEBYrn8hX3RMoFZ3y9V7g6bRWUbAHJAzzkoLSTC6nvS6Vyt49WzsmJ87SzuHnrYfn7v2eQVzG7vBkF8aiSyvc5D",
  "key42": "KS4HgKv6PoTCdp3yUFaGdU9mvFsFuRLdZ2wCQrySgVA2VrgBTWZ7M2oiKthv5NbJkEzj5sjFYidY2hKyuELz1eu",
  "key43": "7FDeBvVTMxKrnHdYEfKg6iq49a6RwLMz9CS7Rj6jmHyHbCBXwcpkRTKHx2zCDsXuGyDWR5CqpifJVevJs23pgMM",
  "key44": "4vRycpUMWuLEmQdfBVnmqbjwfhcChhJg23Uacx4puYWEHS13inN2KxA47t94zmEybvFCUWbKVNKUnYF3APtqwfof",
  "key45": "hAxgpR1vCo9RX73GK6CzT9eG2kgHT2u9XAm3o4FjKX7XccexJMgBXCQYxHSe5ruxtXVUAE8TiSZ8oKZM3vMWFEg",
  "key46": "48hNq6DLxGr1dseHbFkgPLbizJFcFzwXgxGuniJmtprxcs5DvqSPeMtYTFEUc98gWK2FA7chVDmo7qkc2CDZZfJs"
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
