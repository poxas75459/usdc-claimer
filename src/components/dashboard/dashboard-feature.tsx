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
    "4WmwFzFpZy87VkmEjHt21Qfhmjyfk1CDTMUUM5USHwBeZ9AvSfQ1hHpqmZRxb4hzQeu4czTtJ9Uj2a6gCTbWkkNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xr1eqR8Ci1xM5sBtFgR8EfMtCoZMxBCPb8bC1ayeJX1Ut8AC3UTVzJWFQcUtSGSVeGsNdQsE3Tnow5fAAreP4T4",
  "key1": "4azJPmF6W3KvVFjPEprHEjMHw2NfS1brBWteJCk1rYSziZ46tHjaUruyQLGSpndpqWuDuAMownkTfU8bmdPv7QyN",
  "key2": "dn37he7AmjgdLuCvmZyqiF6CvrsajpuCXJw5s32hMvPx2aNnSnuH6BcR5Rqeyw5xK1dbJzfQofvcP8bhMUf2W6M",
  "key3": "4MfweHPQzfVX3V3U7PNfbp1NhZbhDTM8XURRwHp5Ah9e5QbpERGHYHeWJ1s6duNgZzvZtJGSRCpLxCrusViw54mt",
  "key4": "3jyBRnNgEjREDT5tSAow8Z4uhKqkidGCptsc3ad85KtbGjQkt89bxUMRRYH2d4T2DNedND4hb2mqnerGDCQzVzMq",
  "key5": "uz2y6Exhisg246HX5zLXCv59xNymdakEE7txJYNgiCUfcdYmJVEvvGfRwr8yPsAyowo4PksMuLePTeoiX4si8Mi",
  "key6": "3QmzvuZfmGpzTyxdSpmRpHLmVZqhCRBYFxBHadehDgvLg2yh9dFQCHNfoQGsMDKWBmkLELKRTsNhji2KJWpfNLD",
  "key7": "2AAmHcyEncNVEv2aBzkLDBvaGEXNXvGS57M6GgLjjESKgfjby71tqk8PxKgRqN7pw5vzTHErXwTpiFJCWRChFQwn",
  "key8": "5Wc3Sgbjn4uAfnSqwbbBUZE7s2Dn2U2YdDdU6UoFRsS2i7JSsAcQtiDCYW5RSMQzKYHxk2QdJXRjunnqvA5GktS7",
  "key9": "556jNCfhsvpSosVNDxWsVRujubs7v1GkCFz4HLnGzCvWG5cSBVhTuyzdbmjP7utrqoNm6PYi7ay5o8Z9E827Sake",
  "key10": "2hWGw5mykB4EFuh6GmTnDvWsY9zgfS8wxsXp4CHSUQMp1jHegUGV8TgGLWXYZgJJB134qMK6EvkR8A5bVFQCm4bo",
  "key11": "3Q8mif1c85FK6QZQdFXDdpdJyAvrehsdc2UaGAPZkEK3hGSkGn6GePQ5qDE9YBq4wy8G3xKz8B81G3H3PxR3uLdK",
  "key12": "G8M7kJwESYj3iEeqT3jm9u69BPvuQnZShaecidu7x54hegTSY1zAJ4KpAMrBEYNJy2tfayJi3Xxu4HPPWNJDbMg",
  "key13": "2ZsPAH3pf72hiXvFWZCRJuqnrx5BpFZ8vHs8zNWYjHUTEZr8nsSe2vqgstmR5SvP3TCyUdTZ1BCJPGq4L9bNC5TU",
  "key14": "64KipeDFrVGWB2HrKjNeKUqgNbU2GAdVAsQeBuMaWmYWhqUZGKTdgRYJQ3avhTjBTDgC4iAvS35PFFfH7LsGKKiP",
  "key15": "2u5Vuy2L3EiAn8R76vcaD4j6jzX1QeyXqRzGhPwo4bQFXzvyY7f3mgnEoJH6di8pGnNuxNqx7p42vSkw2ZKjg4K6",
  "key16": "2m9LtqZcxge9uNPpky2meU6ip9uT7E43Y8rKDxgTkQvDNbwKRuJ3rc87JogSB1igJZbjmDdWzYtv89na8UQdize6",
  "key17": "5Fy4iKGvghpuRxq56L5hDvgwXTRUbAzCtK6rdibrADkCN8FqQydy6JuzKUke4RWP46mo92wzZySu4PiU3MEFxQgL",
  "key18": "3jokxUM5ZUV9kJjYRvj7KkNmUWU8xbMhb7iBfhmU5XLtkP2kCsRfjQQkosda7WTAU1r9BjGWxLPHsdqtXbi7EuNT",
  "key19": "3sZhDfiqbBHWiDmPS1Ee99TvMUdb8Tuc4eL358tD6fJirZmkBX4Gbx5vG545cxRAMgwo9MNAXBRcH8HxGFvXGp4m",
  "key20": "2nb98xnaKJVnvgyunsg7HaPMgVypVLrpEtRDMhuwzL9Evd1hkQ3ugCjYzgYVhJLNAm65uyRxT3v53S8PwM8PwPNu",
  "key21": "2TrJSknKHkEunCK4cfxSnyRzX87cKTCLKupVQy1Xt3BUpPPWTAzuRs9Bss2V6WYbHKgiywpFnL363PMzyUYJtj3S",
  "key22": "Hz6yHQcRD5wRoEtQB8CDBmBwsDpazREqHj2uAgbao24aXHZBeM7antYttNjvbikHUwCwWVNrtvtk9tHDoBFKZy9",
  "key23": "4nDuJXurYm2xew8VGxwYou7Q2UmPohwWdESbBZx9p9o4Mr4yLheMkR4KkVT5iRsN9efwdYNLU7U1y7NMgYuxyjLL",
  "key24": "3MTB9iZ7364S2nVQHApzwW8rQGKXbUpN4wSk5gcJKKjyN14wA7Gb5VDEyoYbYUTEWZ7fvDEvXb9K58sH5AwxeS5K",
  "key25": "63ac4EbxkLSRUcxPR6MP2x3uGeatBe32e15mf74zw1Znh3QXvVSFPaMAdx52zK8dW6L4xs5X1WbJkKenivddrpTV",
  "key26": "2KaN4fitkcCFAXirH4K8aPtzPxT9vATxB58FmWW69rpkepTuwtcKUAvrvkBL6xrZk3kPTMWGMv49FG5nZKWEZcwf",
  "key27": "47PGM4Kp3Ns52XgCcbkaRWGXNWqewqvwNqascPt1edA3W28tPURg2ywGC5nUCHznCzn2JszEr7TcR3viVmWrjYGc",
  "key28": "1zBvWv4qQjbZQKfUUzDdazineStYYhiXyvdXfsPKG7ggh1VysTRWVtbfKYRG5azZerUANvmveTzoez72V2AxAaE",
  "key29": "4uPfdRv2YbWBZmwR2eV3otFgrPx5DoAsQU5LBG2QKatpbaTpT9iTXwvBrLR2RDErCh9uJPp7vWxZiubE4NH8Eac8",
  "key30": "8EyjV92ZtMcBuKrxdpfMDX1u3DDVvnGremosCcTfWhJoexguDbpRqeoUSYGPPxQ5fnZRKLF8A3KwbagcUjw4Mqu",
  "key31": "3xGxx5nTLvJotrdJtG6GWgTdgGAHBscSvECWZ3JRuMLF5MPA4s2cwzmfPkenFh5jvyTU5pko2orKe3npAM57iuMA",
  "key32": "2qJEgiRGQUhWKchiGVWcmbAz2pG5umSNYdALkd8Ymu9R4zHon3ZWPPV6TBNi3QzERstSMfkG3Q2TadTPavsMuf4a",
  "key33": "316FC54REeotLJD8EaoZ4KiCiScEpGjVt8rxNTXeH1jwbGWWeoabcUZ58rMa4aVhd1sJDaD97JKSLFDKJ1dSrkQZ",
  "key34": "5H6yvnqUvzPYne3awj9Gmgh9U5zvU2GWqexPPDZ3KWr5uEJMDFzt7vQqsUcmVuk9VKaXLbmdfFqHDggVMMhKM1GY",
  "key35": "5F8KcnvyXN1ZuaTcsLTAXiNH8NJFHhUG3DrySC1j4WPaYoZRpsrB2SycYFMpdBehRgefkzFGXYkd7u9S6yE6c2F8",
  "key36": "3otQunytd2bKuG2sGZUjbMzEp12AdzycFez8FECCU2F43xMxcSDbnSdeaccgaJZNL4mZ6ijveHq2587q7eXjm1ZB",
  "key37": "422gSfU4CJDuqwczap69B1nuh3iazSzvFivGn15nzhiVv3mKDMr6YVpKWq2UeM2fDVMng1aV9aKhxEZCCXEen7aK",
  "key38": "5BCfvh3KMPEyjgDC5hrp3tpMtgxEXi7baqW38oEehiRxDUcmJHLn6Cic5Ghv3R9iv2VuVmtDu4SHixPfntiMR7kL",
  "key39": "2PbWugtN5p2Y5Cb41JJ2Gc6FGS7AZxDM3BriWBKyNEDpaap64zYooYHisWr3WBqdNnp4wkAUEagNMVhWE3NMMhL1",
  "key40": "5tJgJ9Le8mLWctBzHNe8WBxqH9QitUcBRk6LDSTnwdqKyiLimKwKydv6EizaFatjkJRQAjzdypX8hAVh6ecM98n9",
  "key41": "5fNHZQJqHMMLv6DxSvXUFvn4VffcQN64myXAuZndGtjTMPk2sftLUmhTRujx5NFZb7dma8RYxBNokNW3fK8hKEmJ",
  "key42": "5XviqSUDXxWuizgidEnDYVZbyuRf1hedgcbkh97Cd6szNFYE1RQwhF6KADdANyUi1s9xybWnG8Ew3CPVueEdSNMh",
  "key43": "4o4oEGHAPCckFv874475dHyaYL5vMZoDTZtZ4LDrUBenHKfU6g4U6MAy4WS5rozgPTo9K4gLMtuaraUTBbkLK5cw",
  "key44": "2ZeXPDumvLAJiUEcNJzjLwhwBCpc8N4YgidPMucpcorQfxC2sPVRhjc3NXpaCgk3kDyuu2puBETAsdYCgV83uk4b",
  "key45": "3tY3jkxRE3kbT7JyLPSLDLYjdBGYqRgWkJtRTqbPTstxjX1muDRwx9UQvHpeguSXrBiRvCwr3YAxNFUQCrf5rrPe",
  "key46": "2m5bSYjKfmvTq3sWoXYm9toPnmYQHTxu5QAe3PsxjwFvUyK4GK8WJEffF9iHKYQi95dWxqxvAMyFgsZ4KMyAC96h",
  "key47": "2rCNxP7D923uzM4g4xZWzNYEc7arU2SqFWsR8bVDx6PMKx4EixP18esvvTzhCb5VTXsEYvXepYFyr8HLstsjXixg",
  "key48": "4ygMwvabKPka96jyxzuZzsGTYt5yHvAXGC8L4sEC9Cb6ZERXnMkzGMae6QroKaogQRYPoy8AZ1RUCzaYFkN3iGmv",
  "key49": "5EjB7WqjMZC7CkkTiBmtmAdhWKFrarzqmZXTadRah4wtpRsZFvoBHRZ2ZoCaghDWtTgJ4mGFwmkTa8iAW2HKq5z4"
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
