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
    "5yUgnzwZiWFvQ54tn4fEpVdBr8ESkxNkdq2wUpnsfyygDXDxaAcRtcuXTod2RCeAbGLLvXT5J3yuKWzwPKmjcYra"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "35gGvMvWwKXmdi3knvtsc84TxTmJxiPUZPFvZ96YKwsmQD7CVALgH2rx3RqTkoFQ2gx1Yj5EhiePZjbX7wEnHxtZ",
  "decoyKey1": "24Q9s1sKjW2LYDKjYLcPFadA6EvGyVdkhkNRu6oDHgtWBz27w9LYQTkSVfVHurL6TPzY7qBsXrjz87gqdg8V86BP",
  "decoyKey2": "22ZupSB4rxjFUhrWsHEsjC4oH6rGgkRvoVrFou6yFyNuU36p2aYZGHecT3JGjbT1yfLgeHeKFeYTyzXL4CKweVxc",
  "decoyKey3": "FvZZAybhvM6FYfcyEDH97E1qSoQX6xoMimXEEYYdjzArPq3sUjPtHZQfQnD6jWvw5kUqtC4ktFhZ8nZTTStw7Lj",
  "decoyKey4": "2WwvwLWie7uPL295bHSFoSQiMd35n8rb3Uf1T743VmjqZT6LqgfyBw5AUnigr6QhWpsqpJLgFmBzUCkT5Ni49kfk",
  "decoyKey5": "16QFZmMkp7C4TJQ7YAdqq3KjwzNgJZYMme4YhVDRydvaeErrMjcxCpKqUxQ9GGxBADpiCZiwkpimn8pHMHU7oDG",
  "decoyKey6": "2yNA3BybYKB7EqxdYsEmsGp5H8yiLyBG1eJ2z2t42MAS9QFew5WoSHo1yfQQnAY8Pya2r6tjRjYwKMkLAmFCQ8uH",
  "decoyKey7": "2iLtZ22DMisBmwhWZbSSxWdn3KKBA3fnEoHedSdJkLry9fK8g1s7wov6gaFCyPTDTchhUS6agQdvp6JqDepbFUiE",
  "decoyKey8": "3Qe9jmkJiibMPDYXKPNR728H9HaZMPHDkAz8bHTaEZLAArTXzEDRKe6oP1TuTKkiFQS442ZEHLiU4j1piuj9FLP8",
  "decoyKey9": "cRvBCFH3ZptWxqyQ8g3KveK2MtYhrBMdvtPBPHaPGKB8rFGohM97ZjTGGjY36Wrpj4jhW6nu8nR4oWUGzkpAnKg",
  "decoyKey10": "2BFRMYRvWspMdi8uaNKsJxENuQ9GWyDmRyb3UeraQrecZEunN2ikP9zAxa6eLADHkyqyR4YpTPo6uLfiRabrPKe6",
  "decoyKey11": "34fJDwA7NUFKyU5UL3KtQcHdPQPiU3Z5AkvtEhD3GwtX6W2tCGhSTGarYSSSSJKkFPKYLdgAxxyFk6e39R5hWtbZ",
  "decoyKey12": "39onr4E9MfSeCps5axn8hi6VihoZqCKAWKtYvz2jxJJzMigh4tuqpHyWkSxchN6JEbwdxV8xwyULq5XqkPJizpko",
  "decoyKey13": "38XyjcQRMc2LgPivdZwLDcAEhuW9WdMQrfmLgUisT3WYmCSfDjbERdjhBjJ33DjN8Nwhw3sAtPjLFC4V93LeK98g",
  "decoyKey14": "2JWcg6TeEzCudUbTSxytkbEwPVUz6YDAgSpkufJWk2uMvc6kgoQyCqnSCxeQLpMojv3EvV8iTxWPs5Ney9xpaytK",
  "decoyKey15": "3iRS9DfK3SvUx1kpXfkESPGpnokL6rvpN2GaekBGVpbNzW3hLxRFH4M2FhVFRCgyqyaCyrgUNEn1GANQTL1bNC9P",
  "decoyKey16": "3iDZqLGJdMEronkfZ9rkMfbxEaUKNbgL9fSMx59CEvsxFfAUH3JHyPwk1s4HRUWZ1jyuXPEWqB2HLE3prFts1hrK",
  "decoyKey17": "Bmh4mc6ugCpJ8gfHveSN26kbMucjCn22wwYVv1NXffCedQ3gQt7uCaKB4FUGquxFT12B1tFkCGdUfjbEmMnmb9S",
  "decoyKey18": "4SyyriD2dsWebTXmXuNeTf5Mzk3VSSPyGTsUCFDX9WtYggwMfHohVEDDVTU5ubqev6pbpcHjA6ttksAG4FXym3hu",
  "decoyKey19": "XVufsDaeEuKgooevYKZypGDj39gR5Qa5wMaemwGnjSX7cg4NdPcvqxxPr8js9DEDosYPYPYY7F7skoyS8tw6j67",
  "decoyKey20": "4uCtazUUrsJKZefN86oRLcEQ3VnT6d5kn1B5igXSjU9zMPr8Bidswvvh8T8C9Toj8yLk68Mz7ndhWktor1ZsELQC",
  "decoyKey21": "2FpLtqdYwuokT9dkP4Hef5AXe12BErAyjqm4jgsXWypHTUhkNkneg8quBvASeemRTv3QbUnBEEBPVg83k1Bj7NyP",
  "decoyKey22": "2gQj3DAU595xekNyTmRRU5kvXLGgue2yxNvzLxZYBW51rUo1XmXVCCMBdnCEoGriKbQfWNcZLfeGLqSrtDbgV7JU",
  "decoyKey23": "5qNnbcMReaTeh8Ko7usXB7uRANR79pb27x2HAmzppDU9bjEdXfLJ7NxkCmvaq3WvMtoxTEAn6w3ySuSnyFZdcgPY",
  "decoyKey24": "2QvQhprubV2DR2GzmgWtqiE29cvfDZpQkaZfyqTNz1G1pEFkTAEforWEuQU2davmfDW3G6vrPUV9dcTLettAe2VE",
  "decoyKey25": "48kjr6mvfshuvV8VQ4pbHJJY1Bvras9zK1MGgcuxsvhvMWJQjHiGVLa3izCW3zVfWEiPDUGJEM3WJPUUksKeWbyz",
  "decoyKey26": "4gQasYSYCNcqFfgKgWdH3teTvaFMfW94hkJeG3a2PKww5VmnUSRzonCDZwN3VH9Jq75dLtTuQSwwtesZBZcfMg2a",
  "decoyKey27": "5YPctqzzB2xv8sExyFwDXtpVy7HSncUvF8FqZEvpL9H7n86kiCaUSF1TKcLABZjBQBvfTe28ETwbmHkskjiRVnoL",
  "decoyKey28": "46Cw2J5a5tRPuCmNvv2MQKRxcxyPNM17X3jMd3HSzEfPhpCTXFoDe4evR6P4yJqNPBExuFbfCZTHajFeoKnVZvLb",
  "decoyKey29": "5KQWqpPpf5HsYLLdLXD13gaYq1zMjpciM1aqS58CaRB4aHKY1weUD1jN9tm9cE2PnASxrkASjkPHrMW3HGGS59s6",
  "decoyKey30": "2Tuf2UXdxSqVUcLTAkhpTNSaSRinNWVtqN9dd3GUdeuwbYm6TSHn5EjzraMdzNHdyqGyYYLRqUPuoAGYvkBbn8C9",
  "decoyKey31": "2hV3gwWtygC8FTayf4EUXbChwrzHVhqrgBDsRTHVTeS3o9JpubTLreX4p7969frcUhFSGB5yXzqP9zQVWEeP3d5J",
  "decoyKey32": "UyZLoKJxFRXaZD1dPrLo58MARJ3pduMbHUKntvJ4LXtTcF17eXEUYueVTf5Jg9Nar4URRRwERQVDtVALMw8BJEj",
  "decoyKey33": "4ExFKUQYEL9i2xaXN88LXghA72vs7kd8ZrWbFQndrmussPC3BrioQfrEJCtrUKREH8faHZqEc5em5MLhgJiwS7gj",
  "decoyKey34": "4r56BSTzxnP5WHhSho1wo3DQus25G1cnwwc34zdDo73tkx8j81dvQuLDFuFaRaLMUAZ81NjCCZbr4UuL3Y4NxrKc",
  "decoyKey35": "233MCsri3YmTh9E8TEBxAUxYEiRZthJ7a1GwHyGad3EgXtZr34rajN6nxFwsarm3NbUGRWVKdrTZX53tMBZHEvfG",
  "decoyKey36": "heyngAWqj7GikDxZynPYHkcfBM5rD5jUb8kJ8mHPM63nmPGKhhuntdGG3gte3CLvq7NH5seD982fddqXqUt8SXG",
  "decoyKey37": "4dTrpDYGk2K5qTNnNBbYo7xN93bXp2N5wmkcWByv4bmUP6k7uBjog3ZgrxiL17kW7Md9F99qWC4keEr4cdbG8LPU",
  "decoyKey38": "4MD7KkkCPFuLdgpWU3KVtBfMRaZPeUwYF7Fns3SbL7E1suT3JdR7HuQfUF59JRkhnus8PWtJESG1Pi41qr3h9wyA",
  "decoyKey39": "3wurt5MhjsbP575unh7KX6Zcd9as6Eri7YwH2BctHmeBbJFbVJZfdwdsy14oxwuvjr46Zq99d3Xkth8RuNimsKTB",
  "decoyKey40": "3yHKxoJ1Ab5NduD6WsBvqeLGZydbVyhaTLAsGWtUzaocjuK2FrtS8YnH17HpgNJR9NfUfXxR6y5VYcEQ31vPwnTB",
  "decoyKey41": "67bw3Hjoa6yKM9a4foSFTsWCatTmm1usJTjcD2zVySKTubTvVTbQk8qpAHkJFe9N9EvYXqyf9THeadJrgRumh2fw",
  "decoyKey42": "2pRzURH5CDB8WGnN7KwF5o7B8zWGk4UNRt2wAEhGjVWUG8zNaq1LKdu4GiLniEr2581rx5TJJxxhkMP2YVkkFifB",
  "decoyKey43": "3LjaqdXmtrpWsZ7SaDrTwDS6k6YweQmzYzUqXF8HoXKjxDBjv3DgG7HUSqddVVpFZsj3V6y2J9Cyq6BNkP5dZ2Vd",
  "decoyKey44": "3yzsFoDftwX6TvT2d28xNUfps2q6Yknh9MGYqFxVvLxQENBzDpLSQ4gy8MN2oRnFQKrg8bxuVXK4wkVhPPmcxfA7",
  "decoyKey45": "42J25nXt7LcYR7Fe9MUwtTyBCDr9ZJQEU6LLPMtTVqLryCFNr2DADY5FMqMn5UZ2c6jvcrSYX35eJ5mqWow18tCn",
  "decoyKey46": "RY7tKyD6gwAmhix3XUYTa54Nmo8UZqN9hErWVD3fhYNf1u8AtXiTkBn6hVvkAaT9TTEqJ7V6mCSbxHo5KH8sQ4N",
  "decoyKey47": "2ttetmdkT8zBn4doQiwFHeTab5CDhhM8dfgyMJfEH9EbnhVzH4kgySXfJTzrCQGVDqyhDQfp3GKt7V1Kb9WT1X5e"
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