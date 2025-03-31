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
    "3ia3cS18kitAgxkhQuhRBTc1pXdXPV2ZZU8rmJzcdjD6WYWpGcEFQ6mQQEx69Bq3NYjyqLnU9SJxknb1FSC24jyQ"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2mqbErMqtDXF49MfXJMREyf4tag1QJpRyLUkQRgSYouqurFEfhv1cDk9iWC2932Jh25Ej47Zdax1NTZQJtC6xiKY",
  "decoyKey1": "3qewz1DjDjaqqhRMZYQAb5HdLYw5qjMGUZ1zvpdDywqLwoTCGoyiasoiyRk1ASrKUqZ2wi5KsSsmdi8VXJdK8VNy",
  "decoyKey2": "4bjq8g9muYVC5eB7vRB39jvRkf25xZ1p8yXnNruPn4dU6n4HCA8nrXhC1ptEGr7mbqJGtRHRHrQ193ykeYAAmNTd",
  "decoyKey3": "ff2roPh67br3MLqDwn4invnZzn4rcveTsWJNFn6Ff3gjVfseArxKAuoMZ2KWWgKnNrnbamDLmhtrxt8sJZtJVMh",
  "decoyKey4": "vGg5YUYzVrUKp7PbCicZiRkVSx7gWvoFKexs1gb4LVXzTUgbDVhAjdfLne71x2bRRPRWMxkU3aKeD5SByRej1Sr",
  "decoyKey5": "PVpsSwJAmB7Ria1vbbdzPaDVrjgyoZMfsJ8CHLZPRxFM9MYJRNXWf61uFZ85s1fSCyAQNAbVSvPEF3wqG3ME4mm",
  "decoyKey6": "4pr5tLvdeMf1jX4pqKsSYiMpawy2KJETSAwTGe5otUU5we1FcU4EjesEzfuGUYrvuS6PFr9cRgAfU8f17pG8gcHX",
  "decoyKey7": "3WMVLJAMpvqo1MTQsAApFNwqGYLTquF48aUFKZBgoJCmVb4dMdmymSCr77wSo8HJNn8LuP3cqpCM7UDsoL7h5Qbf",
  "decoyKey8": "3CNw8bg4pj938JGrqsPj2pGrFcRFuWnHopBU8nZZhXTQmrVc6pkTbJZMhHiUZ6Z6TCZmsKgfL7nhGdHfNayr2GvA",
  "decoyKey9": "3ugvB2upaKKoiqHWM7ke6YcZeZnSsHzkdRztpJJ8ts4izEmkqFiyUxV4i9GYvxRfs95LzvhGgZHyJ5EWszerZ4TQ",
  "decoyKey10": "5jhzqJJVaagKvTHjF5ASJaFqW3bFKa9iisQj8tcBTGgBRWDz6sNChLXBuXHsDYqALbqrgCpCC56D4sGexi8F5Qv2",
  "decoyKey11": "2iWUmfzG7A3zP4mLxbsVKDGgFZZTWmhbQckpQLtKYS3L2XKfWgojY8wQUHUFByo7dWE2cu74Ecf51W5sU5wJbMNV",
  "decoyKey12": "nRJ5b3qDFeW5SmkjvsURy3MXJhQCx7sTaBtC9b2Ef7ejA9CottaLyTUB1FBPn146MVQdLAv2gVt8F6QRxywhJib",
  "decoyKey13": "4kq58twvFMK4vkzJmmqzk8S8HPmjU87Zbmm6KWK9mA5VZfUsabEpLGDPx1vC3ieNUe3nmkxDUqrKe4SaW8Bn2Gyc",
  "decoyKey14": "59JbExn23trxkJeBb2Vud2x6yNMVWwez2khd2y44TpXQMWq5wuYW9PBwNSkeBEa7HaRrcRZDauVAwuAPC2GaksHs",
  "decoyKey15": "3WRURmRmQR1Snqf2p9WoKk23v4DL97iSuPjeoJJaQKXmgvUWVFbEQyBKwt6XrrHQai688jy59Yr5C3SNy5Dk7APJ",
  "decoyKey16": "HnZX3wqveK129ydfhEhRFpjqBXZprMtVNaqbawDAtJyqMq1vbXAPKXXN6PcCuk6ciRdkzrtX4eZyEVbJJLnz3va",
  "decoyKey17": "65pCZ1ZPwD333hCBTSu52FjRzkYogU2pN249iK5ku9KBXhD6D7EiYseRMmMMWLTpAWafS2uCU7Ro72N6DfL8RGfg",
  "decoyKey18": "3Ehm1j3vdyJvu1ggr9SWrR3Bmzi1juZd43xZ7RDJE8EiRgTvJNeexMWKaLRdqZBxSCQv7LyRWqS5h7ZhXFr4Ke6p",
  "decoyKey19": "4WTUKnfiPAcWmxmBukHpHeWbVX86uW7vZBR46xZc7Gf7cXdvRwDtWgL86Pf6HRSBuQShwRigR9F1MfSoAckxH4Zu",
  "decoyKey20": "5TYfAYeAhmhLuqAL9Tz1gayEUCQhPJPYmCXkgQUvsFMh4qxbpcrvrE5tzqqHsQhogUZb41mZ8KxKoVWcGRNHWKtj",
  "decoyKey21": "3PA6iZpEFXdEivv1dwvWYn1BMBSp2GYvzNmPaJCpx4oGjtCSmWFS7ZKFxPZcm3WWt3tzoDcxQBVuLgpqcr4V8wzF",
  "decoyKey22": "3QhbUH2NiKXPfaWHRmNS6HnfR9HFgjgrJKvjzAx8XFS8pEPRRGTFKuRdjvqaptygXP7yDkjTLiaXy2QgJgQsskiF",
  "decoyKey23": "evARmxyyj76QXBAG2UMFDJRS6h9eR7D1P2NfnbGRGsLkBgYuxHLf4MEMgcVKY9v8YP8Cd6agWzzAR2mUEf7fF6N",
  "decoyKey24": "4zSrgf2jsf3eEt1ntAG77TrRa4vVSZyMzLoo8Vzr5oryNERovuEXfSBoLsZ7sqhx21sAvAwqono2Jb7YnpaGkYij",
  "decoyKey25": "EWTGkjav3t6jbp28nRERYWxpPxxFCFeV7cJf9BUSikm6TcFxaHfEDeXeB7PtrmFm37Zt4eTwhJkiSAtNxYTdjnw",
  "decoyKey26": "5aSsM4GhphANu3DX8qzwAHBUwDuMrx2qGRTpHgUk13HUBf4dgWG5mM7fR1FuaeLp6Tic8wHrX4FMJvqnbUyvkCMa",
  "decoyKey27": "35idtMNk2vZXxcTHnfKcieoaLK2N9sacKEyBgCsW7ExDZEprvbCQWnKfWjpE3KEvexXgH25ChkvBXkgUP97u1EeH",
  "decoyKey28": "3wphBdeF36ZmpEwtXo8ai5o6kmkTuN7t57HoU8NjtQrrYZ8gLLnqQvp9S1ezgE1iruiMdtTbgoXJyaP9MBBQT8UG",
  "decoyKey29": "4HS7QG1aZWsD8Gpig1Ht5DyJx5dTXSp1sNL7BcwwvfX8Stv4ng6KXeXbvAhSYFJSV3U3rfcLMHjUn6ccdJktgTUW",
  "decoyKey30": "D8yo7ArqyQVmGFLcF1umczFcjnNhg6iKpzQC4ESG2ryuio6xpzE2E2VGVPgWfajj4oDu6Aa6mZwUJGGe8MBHjJE",
  "decoyKey31": "5awVfG4Sh3q9HupeL86Fyxc7BPpNJav2AyyovVFqL1j2G3aqQNzCJiTiSns5uPDwiYtd9F3H67vS3rjdGNMnPYdD",
  "decoyKey32": "VWdaFJTs4bnH5i8g7JogZmdmB1iTC8HjVcnnZBozz73TegpJPuzuD7zCSVH4hnZETQEP9PPDmygSqLaB8Q7XVj2",
  "decoyKey33": "RUpBrKuSC6w9xLkG7CWkApvwfm2hGPnfnguVHvWqtncdsGehH8ERsdhEvn35mVLdJrmdw3HcK5LvNS9kp5Gk8kp",
  "decoyKey34": "2BfS8gbEamMGYwaQkFxuwCBpt852dCrNtPvV148jXKC58vNzuaij94vNaZRc15JkHv2HB9XeKGryLWKw4qPB53f7",
  "decoyKey35": "rV38AHkAW1ZpfBXMCyo4iGJcwFb2yHFKw1AWKy5dSmG7ia9uLXSDbKpoBLqfV1Ak9ApLxUBAGu3zUX9CVHBiYB2",
  "decoyKey36": "4fqYnpwAoDyEPjY1VCWzJyAwNsRf2ZeMfb7mauMeffzjLcvgHjRJgKBfT47cLudVj3wJ5oetGpKLNj4q13rq3XXZ",
  "decoyKey37": "36qAa5fzfW7ivZ4c9KutihqzpR6bGhnggEQ2g84dwr28kGdckcAUdLuyKZDG2R99xMGwQadtzFXsPCPVgBEwASHS",
  "decoyKey38": "3hFpXZ8VDndZXL6JLonMqSde8ZB4zs3H3K735s2raiWiYnTp5Sfhp9WbL7QjkmtXkYgzT6YcviW3Ux86Wt7z3hhM",
  "decoyKey39": "3bhwozzr6cbMZPgCmsZDCPFK1oXwDPEiKoQEbDQM7aG8czACYzSBMhU8J5a81txAvLpZsJPdG78ky1BE2SvRdadM",
  "decoyKey40": "4xNpw7qQgprdGBqFKXjfpMsvK3p2ZPD8Dh2rHhT3CdmxgoUjNWdb1HQmQPrNUwvNVjiZ9VxaqzARt1yBjv7QNqJ3",
  "decoyKey41": "325M6vR2sUcAUjANcJaupH87JHMR3BAEhEvVZWJT1t8RqJ6kxJwSpNwjFrJfWLKWM7BeWtbz4crx5dEpc7A8whEa",
  "decoyKey42": "4fzqKuTZpgUemkZ9TyfpHFDppnx35MJRypT7mMLNXRTak7ppbq98RtVwYXwie4rvAQPumoHXLdHW91bz5c8Pef4J",
  "decoyKey43": "27V6iwV6LRbHEjpZw9ynfrALNTDe3mFcqeQKXYzM978TKZ4HLXiQSL1jjtwvbSnts1g5caijmDoaQAMi4hV9RBGe",
  "decoyKey44": "3RSRMPYWfCxPZhpwVBSwDWQFwuZ7mmyJkYxpzPMJjZwoVJjEpVJP3Xa79MTaX2gSP6B4QXZNMvaFqtVvN7mAQFcB",
  "decoyKey45": "3qtWHF8W2LpqaKhRjXiLyV3n7xeLLG1eLd7KmRuqvmSPzHrNc5bTTDReUkjWiPd8oXEzYVMpSh98nDr1gmQhoMWY",
  "decoyKey46": "2SeFcEJ6aSWMgXagFdFmAjLMLEGngSuZziEsnZYuYmfb7kFsEfZ1wsvmQfbQG66ucSZVuLXsbq3SvU6n7USvuJmS",
  "decoyKey47": "4KD6YEpUtruwDc1ouxNJZeXqFoPjHqdeDr1xBGpLVzGbC5Sz63yu4jnjJzrtX3FQdxxfFTRbcbsxMtKHw7KTgNjd",
  "decoyKey48": "26H6s2Tot7WYj3jDgYU8CPVENFLNNnS1wc1aH6CA5x4Raxfrnut858DRj1jVEPDJCHLPgCouYobCiLquToGyD5NY",
  "decoyKey49": "2RV94QcCfuDiowGi66rxa2RkDNaSUXvF9hQxRMRXAHDhxoLYHYa8UbR66FfER231avdPdQ5itzH7hg8bGi4YGvhZ"
};
// DECOY_KEYS_END
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